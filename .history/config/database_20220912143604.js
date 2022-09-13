var fs = require('fs');



module.exports = {
    getUsers:async()=>{
        return new Promise((resolve, reject) => {
            try {
                const data = fs.readFileSync('orders.txt', 'utf8');
                var users = data.split(",\n")
                console.log(users)
                resolve(users);
            } catch (err) {
                console.error(err);
                reject(err);
            }
            
          });
          
    }
}