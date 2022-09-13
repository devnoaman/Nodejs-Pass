


const {orders} = require('../controllers/controllers')
module.exports = function (app) {
  app.get('/orders',orders );
 
  //other routes..
}