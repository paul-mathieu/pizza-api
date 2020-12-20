const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 32
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 32
  },
  password : {
    type: String,
    required: true,
    min: 6,
    max: 32
  },
  orders: {
    type: [{type: Schema.Types.ObjectId, ref: 'order'}], 
    default: []
  },
  history: {
    type: [{type: Schema.Types.ObjectId, ref: 'order'}], 
    default: []
  },
  status: {
    type: String,
    default: "user"
  }
});

module.exports = mongoose.model('Client', ClientSchema);
