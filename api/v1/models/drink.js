const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name : String,
  description : String,
  price : Number,
  allergen: {
    type : String,
    default : null
  },
  bio: {
    type : Boolean,
    default : false
  },
  vegan: {
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('Extra', drinkSchema);
