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


<<<<<<< HEAD
module.exports.Outfit = Outfit;
=======
module.exports.Outfit = Outfit;
>>>>>>> a7390485ee32964aa067e28c5456ec5dae02c45e
