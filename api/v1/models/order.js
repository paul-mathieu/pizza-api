const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  pizza : {
    type : {type: Schema.Types.ObjectId, ref: 'pizza'},
    default : null
  },
  size : {type : String, default : 'normal'},
  extras : {
    type : [{type: Schema.Types.ObjectId, ref: 'extra'}], 
    default : null
  },
  drink :  {type : Schema.Types.ObjectId, default : null},
  dessert :  {type : Schema.Types.ObjectId, default : null},
  date : {type : Date, default : Date.now}
});

module.exports = mongoose.model('Pizza', OrderSchema);
