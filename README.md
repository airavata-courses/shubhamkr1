# Microservices interaction with multiple languages

I have used Nodejs , Python with Flask and Java to create three microservices. They transfer data among themselves using JSON format.

I have created UI using jquery and AJAX. UI calls nodejs which call python which in turn calls java service. Some data is also passed in between the services. 

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
- api url = http://localhost:3000/service1

## Steps for Python server
1. Go to python_microservice folder
2. Run hello.py
> python hello.py
- api url = http://localhost:5000/calculate/items=john

## Steps for Java Spring server
1. Go to java_micro_service folder.
2. Go to target folder
3. Run following command 
> java -jar Invoice-0.0.1-SNAPSHOT.jar
- api url = http://localhost:8080/Invoice
This sends hello response.

#To test all services, please run all servers and then use index.html page
