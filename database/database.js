const mongoose = require("mongoose")

exports.connectDatabase = async () => {
    // connecting to Database
    await mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected successfully");

}