const Joi = require("joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  question: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1200,
  },
  contactNum: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 99999999999,
    unique: true,
  },
});

const contact = mongoose.model("contact", contactSchema);

function contactValid(contact) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).email().required(),
    subject: Joi.string().min(1).max(255).required(),
    question: Joi.string().min(1).max(255).required(),
  });
  return schema.validate(contact);
}
async function generateContactNumber(contact) {
  while (true) {
    let RandomNumber = _.random(1000, 999999);
    let contacts = await contact.findOne({ contactNum: RandomNumber });
    if (!contacts) return String(RandomNumber);
  }
}

exports.contact = contact;
exports.contactValid = contactValid;
exports.generateContactNumber = generateContactNumber;
