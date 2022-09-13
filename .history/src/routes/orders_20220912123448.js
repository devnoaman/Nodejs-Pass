


const {ordersController} = require('../controllers/controllers')
module.exports = function (app) {
  app.get('/orders',ordersController );
 
  //other routes..
}