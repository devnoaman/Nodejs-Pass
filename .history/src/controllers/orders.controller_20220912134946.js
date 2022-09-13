
// imports
var fs = require('fs'); 

module.exports={
    orders:async(req,res) =>{
        console.log('login');

        try {
            const data = fs.readFileSync('orders.txt', 'utf8');
            var users = data.split('\n \,')
            console.log(users);
            // var info = users.split('\n,')
            // console.log(info);

          } catch (err) {
            console.error(err);
          }
          
      
    }
}