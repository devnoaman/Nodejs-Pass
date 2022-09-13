// ! the entry point for the application
// this what would be loaded after running the code 



// imports of the app
const {printLog} = require('./utils/log')
var express = require('express');

// routes for the application
const {order} = require('./src/routes/routes')


// implementation of the application
printLog('App EntryPoint hitted')

   
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


