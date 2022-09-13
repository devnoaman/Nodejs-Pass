
// imports
var fs = require('fs'); 

module.exports={
    orders:(req,res) =>{
        console.log('login');

        fs.readFile('orders.txt',async function(err, data) {
            var d = await data;
            // res.writeHead(200, {'Content-Type': 'text'});
            // res.write(data);
            console.log(d);
            // return res.end();
          });

    }
}