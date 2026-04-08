const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    telephone: String,
    age: Number,
    country: String,
    gender: String,
})
const customer = mongoose.model("customer", dataSchema)
module.exports = customer