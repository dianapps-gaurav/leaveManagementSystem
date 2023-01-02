const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const db = () => { 
    mongoose.connect("mongodb://localhost:27017/leaveManagement", { useNewUrlParser: true,
        
        useUnifiedTopology: true }).then(() => {
        console.log("Successfully connected to database");
    }).catch((error) => {
        console.log("database connection failed. exiting now",error);
    });
};

module.exports = db;
