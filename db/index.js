const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let outfitSchema = mongoose.Schema({
  id: Number,
  category: String,
  name: String,
  original_price: Number,
  sale_price: Number,
  img_url: String,
  overallRating: Number
});

let Outfit = mongoose.model('Outfit', outfitSchema);


module.exports.Outfit = Outfit;
