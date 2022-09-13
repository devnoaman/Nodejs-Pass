module.exports = {
    getUsers:async()=>{
        return new Promise((resolve, reject) => {
            try {
                const data = fs.readFileSync('orders.txt', 'utf8');
                var users = data.split(",\n")
                // console.log(users[2]);
                // var objects = users[2].split('\n')
                // console.log(objects);


                resolve(users);
            } catch (err) {
                console.error(err);
                reject(err);
            }
            
          });
          
    }
}