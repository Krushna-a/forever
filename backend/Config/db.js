require('dotenv').config();
const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose.connect(`${process.env.MONGO_URI}`)
        .then(() => {
            console.log("connected to DB");
        })
        .catch((error) => {
            console.log("DB connection error:", error.message);
        });
};

module.exports = connectToDB;
// ${process.env.MONGO_URI}