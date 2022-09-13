const { count } = require('console');
var fs = require('fs');



module.exports = {
    getUsers: async () => {
        return new Promise((resolve, reject) => {
            var myData = []
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
var userItems = items.map(item =>{
    var i = item.split(' ');

    return{
    name : i[0],
    count : i[1],
    price : i[2],
    total : i[3]}
})
// myData.push(
//                         {
//                             name: user[0],
//                             location: user[1],
//                             count: user[2],
//                             items

//                         }
//                     )
                console.log(userItems)
                
                
                });

                resolve(users);
            } catch (err) {
                console.error(err);
                reject(err);
            }

        });

    }
}