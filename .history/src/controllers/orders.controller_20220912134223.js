
// imports
var fs = require('fs'); 

module.exports={
    orders:(req,res) =>{
        console.log('login');

        try {
            const data = fs.readFileSync('orders.txt', 'utf8');
            console.log(data);
          } catch (err) {
            console.error(err);
          }
          
      
    }
}