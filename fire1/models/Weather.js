
var mongoose = require('mongoose');

var WeatherSchema = new mongoose.Schema({
  location: String,
  temperature: String,
  wind: String,
  humidity: String,
  rainfall: String,
  updated_date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Weather', WeatherSchema);
