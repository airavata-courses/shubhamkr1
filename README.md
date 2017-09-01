# Microservices interaction with multiple languages

I have used Nodejs , Python with Flask and Java to create three microservices. They transfer data among themselves using JSON format.

## Test on Windows 7 or Linux
Please install the following 
- Nodejs from https://nodejs.org/en/.
- Python 2.7.x 
- Flask latest version from http://flask.pocoo.org/
- JDK version 8

# To test individiual services

## Steps for Node server
1. Go to node_microservice folder.
2. Run index.js file
> node index.js
3. Terminal would show message
> Example app listening on port 3000!

## Steps for Python server
1. Go to python_microservice folder
2. Run hello.py
> python hello.py

## Steps for Java Spring server
1. Go to java_micro_service folder.
2. Go to target folder
3. Run following command 
> java -jar Invoice-0.0.1-SNAPSHOT.jar

To test all services, use index.html page
