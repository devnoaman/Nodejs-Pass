// ! the entry point for the application
// this what would be loaded after running the code 



// imports of the app
const { printLog } = require('./utils/log')
var express = require('express');

// routes for the application
const { order } = require('./src/routes/routes');
const orders = require('./src/routes/orders');
const { application } = require('express');


// implementation of the application
printLog('App EntryPoint hitted')


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port =process.env.PORT || 3000
orders(app);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

