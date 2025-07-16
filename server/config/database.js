const mongoose = require("mongoose");
require("dotenv").config(); // ✅ Make sure this is here too

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => {
        console.log("❌ Database connection error:");
        console.error(err);
        process.exit(1);
    });
};



// Imports Mongoose – to interact with MongoDB.
// Loads environment variables using dotenv.
// Defines a function connect() that:
// Tries to connect to MongoDB using a connection string from .env.
// Logs success or handles failure by showing an error and exiting the app.

