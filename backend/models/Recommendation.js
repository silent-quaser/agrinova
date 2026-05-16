const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({

  soil: {
    type: String,
    required: true
  },

  season: {
    type: String,
    required: true
  },

  water: {
    type: String,
    required: true
  },

  recommendedCrop: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "Recommendation",
  recommendationSchema
);