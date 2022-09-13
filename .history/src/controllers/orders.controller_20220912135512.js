
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


            const ress = [];
    for (let i = 0; i < info.length; i ++) {
        const chunk = info.slice(i, ',');
        ress.push(chunk);
    }
    console.log(ress)

          } catch (err) {
            console.error(err);
          }
          
      
    }
}