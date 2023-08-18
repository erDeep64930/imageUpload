const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(console.log("db connection established"))
        .catch((err)=>{
            console.log(`Error connecting to Mongo ${err.message}`)
            process.exit(1);
        })
}