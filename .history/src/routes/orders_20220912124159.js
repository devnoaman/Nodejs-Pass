


const {orders} = require('../controllers/controllers')
module.exports = function (app) {
  app.get('/orders',(req,res) =>orders() );
 
  //other routes..
}