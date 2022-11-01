## PROJECT NAME: NIM_JOB_APP

* npm create vite@latest
* npm init
* npm install express nodemon

error on type:

### You are using require in a Node.js environment
In this case, check your package.json file for an property called type. If that is set to module, ES6 modules will be enabled and you will run into the error mentioned above (specifically ReferenceError: require is not defined in ES module scope, you can use import instead). Simply remove that entry and you will be able to use require.

* Install mongoDB 
*npm install mongoose
* we go to mlab.com for free database on mongoDB
* after we have a DB
*npm i dotenv
* we can create a .env file

*postman.com