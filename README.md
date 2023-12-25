# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Getting Started
1. Create IAM with access key
2. Config aws configure with newly create IAM user
3. Clone this code to local


## Project Instructions

To complete this project, you will need to:

* To start application locally
> npm run dev
* To build and deploy application onto AWS ElasticBeanstalk
> eb init
* and
> eb create
* To update if any source code changes
> eb deploy

## Testing
Application deployed successful to AWS at:

[Link to Application - EBS Endpoint](http://project2-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818)
