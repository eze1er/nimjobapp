const mongoose = require("mongoose");

const SkillsSchema = mongoose.Schema({
  title: {
    types: String,
    required: "true",
  },
  category: String,
  skills: [{ first_skill: String }, { second_skill: String }],
  candidate_nbr: Number,
  create_at: Date.now,
  experience: String,
  level: String,
  address: {
    street1: String,
    city: String,
    state: String,
    zipcode: String,
  },
  covid_19_option: String,
  residence_option: String,
  status_code: String,
});

module.exports = mongoose.model('Skills', SkillsSchema)
