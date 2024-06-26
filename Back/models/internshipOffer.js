const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const internshipOfferSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: null
  }
}, {
  timestamps: true 
});

const InternshipOffer = mongoose.model('InternshipOffer', internshipOfferSchema);

module.exports = InternshipOffer;
