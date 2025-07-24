const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2')
const PORT = 5000;
const DB = require("./Db")
// const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  // allow frontend
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.post ('/login', async (req,res) => {
    const {email,password,name} = req.body;

    DB.query("SELECT * FROM WHERE ")
})

app.post('/booking', (req, res) => {
    const newUser = {
        name: req.body.name,
        destination: req.body.destination,
        date: req.body.date,
        time: req.body.time,
         guest_num: parseInt(req.body.guest_num, 10),
        // user_id: req.body.user_id
    }
    console.log(newUser.time); // or just `time` being used outside of `newUser.time`


    const query = `INSERT INTO user_info (name,destination,date,time,guest_num) VALUE (?,?,?,?,?)`
    const value = [
        newUser.name,
        newUser.destination,
        newUser.date,
        newUser.time,
        newUser.guest_num,
        // newUser.user_id
    ]
    console.log(req.body.time); // if you're trying to see the time from the request body
    console.log(newUser.time); // if you've already built the newUser object


    DB.query(query, value, (err, result) => {
        if (err) {
            console.log("Error in inserting info : ", err)
            return res.status(500).json({ message: 'Database error' });

        }
        else {
            console.log("Info inserted successfully : ", result);
            return res.status(201).json(newUser)
        }
    })
})

app.listen(PORT, (err) => {
    if (!err)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", err);
}
)