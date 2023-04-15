const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email_id: String,
    password: String,
    reg_name: String,
    city: String,
    state: String,
    map_data: String,
    charts_data: String,
    cala_n: [String],
    chart_lab: String,
    githublink: String,
    reg_color: String,
    reg_label: String,
    reg_data1: String,
    lat_m: String,
    long_m: String,
    chg_data: String

})

module.exports = mongoose.model("users", userSchema);
