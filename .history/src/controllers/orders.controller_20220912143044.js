
// imports
var fs = require('fs');

module.exports = {
    orders: async (req, res) => {
        console.log('login');
        databse.getUsers().then((result) => {
            res.send(result)
            
        }).catch((err) => {
            
        });;
       


    }
}