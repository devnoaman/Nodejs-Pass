const { count } = require('console');
var fs = require('fs');



module.exports = {
    getUsers: async () => {
        return new Promise((resolve, reject) => {
            var data = []
            try {
                const data = fs.readFileSync('orders.txt', 'utf8');
                var users = data.split(",\n")
                console.log(users)
                users.map(user => {
                    console.log(user)
                    var userData = user.split('\n')
                    console.log(userData)

                    var items = userData.filter(function(value, index, arr){ 
                        return index > 2&&index<userData.length-2;
                    });
var items = items.map(item =>{
    name = item[0],
    count = item[1],
    price = item[2],
    total = item[3]
})
                    data.push(
                        {
                            name: user[0],
                            location: user[1],
                            count: user[2],
                            items

                        }
                    )
                console.log(data)
                
                
                });

                resolve(users);
            } catch (err) {
                console.error(err);
                reject(err);
            }

        });

    }
}