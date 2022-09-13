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
myData.push(
                        {
                            customer: user[0],
                            address: user[1],
                            count: user[2],
                            items:userItems.map(user=>{return user})

                        }
                    )
                console.log(myData)
                
                
                });

                resolve(myData);
            } catch (err) {
                console.error(err);
                reject(err);
            }

        });

    }
}