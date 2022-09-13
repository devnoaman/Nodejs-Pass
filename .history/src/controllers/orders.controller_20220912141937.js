
// imports
var fs = require('fs');

module.exports = {
    orders: async (req, res) => {
        console.log('login');
        databse.getUsers();
        try {
            const data = fs.readFileSync('orders.txt', 'utf8');
            var users = data.split(",\n")
            console.log(users[2]);
            var objects = users[2].split('\n')
            console.log(objects);
        } catch (err) {
            console.error(err);
        }


    }
}