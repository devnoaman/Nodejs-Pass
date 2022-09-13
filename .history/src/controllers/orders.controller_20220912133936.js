
// imports
var fs = require('fs'); 

module.exports={
    orders:(req,res) =>{
        console.log('login');

        fs.readFileSync('orders.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text'});
            res.write(data);
            console.log(data);
            return res.end();
          });

    }
}