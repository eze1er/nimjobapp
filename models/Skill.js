const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: String,
  skills: [{ first_skill: String }, { second_skill: String }],
  candidate_nbr: Number,
  create_at: {
    type: Date,
    default: Date.now
  },
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

const UsersSchema = mongoose.Schema({

})
module.exports = mongoose.model("Skills", SkillSchema);
