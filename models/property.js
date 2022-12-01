const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const addPropertySchema = new Schema({
   propertyType: { required: true, type: Array },
   negotiable: { type: Array },
   price: { type: String },
   ownership: { type: Array },
   propertyAge: { type: Array },
   propertyApproved: { type: Array },
   propertyAge: { type: String },
   propertyDescription: { type: String },
   bankLoan: { type: Array },
   length: { required: true, type: String },
   breath: { required: true, type: String },
   totalArea: { required: true, type: String },
   areaUnit: { type: Array },
   noOfBHK: { type: Array },
   noOfFloor: { type: Array },
   attached: { type: Array },
   western: { type: Array },
   furnished: { type: Array },
   carParking: { type: Array },
   lift: { type: Array },
   electricity: { type: String },
   facing: { type: Array },

   name: { type: Array },
   mobile: { required: true, type: String },
   postedBy: { type: Array },
   saleType: { type: Array },
   featuredPackage: { type: Array },
   ppdPackage: { type: Array },

   email: { required: true, type: String },
   city: { type: Array },
   area: { type: String },
   pincode: { type: Array },
   address: { type: String },
   landmark: { type: String },
   latitude: { type: String },
   longitude: { type: String },
   PPDId: { required: true, type: String },
   Views: { required: true, type: String },
   DaysLeft: { required: true, type: String },
   
   image: { type: String },
   status: {type: String, default: "Unsold"},
   users : {type :mongoose.Schema.Types.ObjectId, ref: "Users"}
 })
const addPropertyModel = mongoose.model("Property", addPropertySchema);
module.exports = addPropertyModel;