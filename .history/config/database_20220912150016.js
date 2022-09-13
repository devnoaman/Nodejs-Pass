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

                    var filtered = userData.filter(function(value, index, arr){ 
                        return index > 2&&index<userData.length;
                    });

                    // data.push(
                    //     {
                    //         name: user[0],
                    //         location: user[1],
                    //         count: user[2],

                    //     }
                    // )
                    console.log(filtered) 
                
                
                
                });

                resolve(users);
            } catch (err) {
                console.error(err);
                reject(err);
            }

        });

    }
}