const express = require('express');
const employeesRoutes = require("./routes/employees")
const userRoutes = require("./routes/users")
const mongoose = require('mongoose');

const app = express();
const SERVER_PORT = 3001
const DB_URL = "mongodb+srv://ffeerdous:Feerdaus12$@cluster0.au6ya1r.mongodb.net/EmployeesDb?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(express.json())
app.use(express.urlencoded())

app.use("/api/emp/", employeesRoutes)
app.use("/api/user/", userRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>Welcome to Employee Assignment 1</h1>")
    })
app.listen(SERVER_PORT, () => {
    console.log(`Server runnig at http://localhost:${SERVER_PORT}/`)
})