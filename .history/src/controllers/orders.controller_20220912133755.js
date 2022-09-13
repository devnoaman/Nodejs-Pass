
// imports
var fs = require('fs'); 

module.exports={
    orders:(req,res) =>{
        console.log('login');

        fs.readFile('demofile1.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });

    }
}