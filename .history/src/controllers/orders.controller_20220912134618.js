
// imports
var fs = require('fs'); 

module.exports={
    orders:async(req,res) =>{
        console.log('login');

        try {
            const data = fs.readFileSync('orders.txt', 'utf8');
            var users = data.split(',')
            console.log(users);

          } catch (err) {
            console.error(err);
          }
          
      
    }
}