
// imports
const {getUsers} = require('.././../config/database')

module.exports = {
    orders: async (req, res) => {
        console.log('login');
        getUsers().then((result) => {
            res.send({orders:result})
            
        }).catch((err) => {
            
        });;
       


    }
}