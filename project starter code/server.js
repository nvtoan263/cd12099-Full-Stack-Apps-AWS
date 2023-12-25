import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';
import fs from 'fs';

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Define the endpoint
  app.get('/filteredimage', async (req, res) => {
  const { image_url } = req.query;

  // Validate image_url
  if (!image_url) {
    return res.status(400).send('Image URL is required');
  }

  try {
    // Call filterImageFromURL to filter image
    const filteredImagePath = await filterImageFromURL(image_url);

    // Send the filtered image in the response
    res.status(200).sendFile(filteredImagePath, (err) => {
      // Delete the file after sending the response
      fs.unlink(filteredImagePath, (unlinkError) => {
        if (unlinkError) {
          console.error('Error deleting filtered image:', unlinkError);
        }
      });

      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  } catch (error) {
    console.error('Error filtering image:', error);
    res.status(500).send('Internal Server Error');
  }
  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
