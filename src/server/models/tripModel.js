const mongoose = require('mongoose');

// define the schema for trips
const tripSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  trip_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  items: [{
    name: {
      type: String,
      required: true
    },
    sub_items: [{
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }]
  }]
});


module.exports = mongoose.model('Trip', tripSchema);