



const {login,signup} = require('../controllers/auth.controller.js');
module.exports = function (app) {
  app.post('/login',login );
  app.post('/signup',signup );
  //other routes..
}