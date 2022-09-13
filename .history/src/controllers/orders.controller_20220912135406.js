
// imports
var fs = require('fs'); 

module.exports={
    orders:async(req,res) =>{
        console.log('login');

        try {
            const data = fs.readFileSync('orders.txt', 'utf8');
            var users = data.split('\n')
            // console.log(users);

            var info = users.split(',')
            console.log(info);


            const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }

          } catch (err) {
            console.error(err);
          }
          
      
    }
}