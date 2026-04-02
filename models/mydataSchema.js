const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    username: String, password: String
})
const Mydata = mongoose.model("Mydata", dataSchema)
module.exports = Mydata