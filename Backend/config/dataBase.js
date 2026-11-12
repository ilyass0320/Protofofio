require("dotenv").config();
const mysql = require("mysql2");
const database = mysql.createConnection({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME
    host: "localhost",
    user: "ilyassPro",
    password: "ilyass0032",
    database: "express_react_db"
});

database.connect((err) => {
    if (err) {
        console.log("Erreur de connection: ", err);
        return;
    }
    console.log("Connecté a MySQL!");
});

module.exports = database;