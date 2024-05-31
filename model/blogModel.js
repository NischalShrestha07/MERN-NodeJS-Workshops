// This is called the Schema. We have to built it on our own but SQL gives automatically.

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String
    },
    subTitle: {
        type: String

    },
    description: {
        type: String
    },


}, {
    timestamps: true
})
const Details = mongoose.model("Details", blogSchema)
module.exports = Details
