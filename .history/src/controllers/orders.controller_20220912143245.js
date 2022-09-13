
// imports
var fs = require('fs');
const {getUsers} = require('.././../config/database')

module.exports = {
    orders: async (req, res) => {
        console.log('login');
        getUsers().then((result) => {
            res.send(result)
            
        }).catch((err) => {
            
        });;
       


    }
}