const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const addPropertySchema = new Schema({
    ppdId: {type:String,unique}, 
    image: String,
    property: [String], 
    contact: {type:Number},
    area: Number, 
    views: {type: Number},
    status: {type: String, default: "Unsold"},
    daysLeft: {type:Number}

   
 })
const addPropertyModel = mongoose.model("Property", addPropertySchema);
module.exports = addPropertyModel;