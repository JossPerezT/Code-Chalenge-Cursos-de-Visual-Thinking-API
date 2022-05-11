# Code Challenge. 
Code Challenge Week 4 "Cursos de Visual Thinking API". 

## Requeriments: 
1. Creating a endpoint to consult all students information. 

2. Creating a endpoint to consult all student's emails with `haveCertification` certification. 

3. Creting a endpoint to consult all students with `credits` greater than 500.

## Design 
```mermaid
graph TD;
    Reader-->studentController
    studentService-->studentController
    studentController-->server
```
I separated responsibilities: 
- Service: gives functionality to projects: get all students, get all emails and get all students with credits greater than 500. 
- Reader:  gives auxiliary class to read JSON files. 
- Controller: is  a connection with the server. 

## Endpoint 
| Endpoint | Request | Response  | Example
|---|---|---|---|
| `localhost:3000/` | `localhost:3000/` |You should get 'Welcome to Visual Thinking API'|![image](https://user-images.githubusercontent.com/84040594/167746021-ee20969b-f09b-47d7-acd9-8b1fe1bffce0.png)|
| `localhost:3000/students/` | `localhost:3000/students` | You should get a list of all students information|![image](https://user-images.githubusercontent.com/84040594/167746170-72e7ec2d-1515-459a-99bc-7e4eaca37fb8.png)|
| `localhost:3000/students/emails/` | `localhost:3000/students/emails` | You should get all studients emails with certification|![image](https://user-images.githubusercontent.com/84040594/167746305-2f7f01c0-d7f7-4b70-81ca-f0e689fc861d.png)|
| `localhost:3000/students/credits/` | `localhost:3000/students/credits` | You should get all students information with credits greater than 500|![image](https://user-images.githubusercontent.com/84040594/167746235-617b2da1-fe0b-48a9-adce-54379ff03541.png)|

## Run project. 
- Run `npm run server`in  command line. 
  -  ![image](https://user-images.githubusercontent.com/84040594/167747943-abacbff4-f1fe-4dab-8e03-71b9caea743e.png)
- The server should be ready, enter endpoints in your browser and will see the API.


## Dependencies. 
- [Jest](http://jestjs.io/)
   - Testing Framework to test my code. 
- [Express](https://expressjs.com/).
  - Web framework to creating API´s and http methods. 
- [Supertest](https://www.npmjs.com/package/supertest).
  - Used it to run testing with a http method server. 
- [Eslint](https://eslint.org/).
  - Used it to find and fix syntax errors and standirse code. 

## Getting Started
This proyect need dependencies Jest, Express, EsLint and Supertest. 
1. Run: `npm install' to create node_modules files. 

If don´t install it, run:
1. Jest: `npm install --save-dev jest`
2. Express: `npm install express --save`
3. Eslint: `npm install eslint --save-dev to install dependence and `npm init @eslint/config` to configure the rules. 
4. Supertest: `npm install supertest --save-dev`

## EsLint 
EsLint help us to find and finx syntax error and gives a style guide about standirse code. Here use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Run `npm run linter` to find syntax errors. 
- Run `npm run linter --fix`to fix all syntax errors automatically. 

