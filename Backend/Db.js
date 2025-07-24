const mysql2 = require('mysql2')

const Db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "More11@7",
    database: "my_tour"
});

Db.connect(function (err, res) {
    if (err) {
        console.log("Error in connecting db", err);
    }
    else {
        console.log("connected successfully.");
    }
})

 module.exports = Db;