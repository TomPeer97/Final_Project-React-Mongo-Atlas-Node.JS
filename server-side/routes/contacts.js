const express = require("express");
const _ = require("lodash");
const {
  contact,
  contactValid,
  generateContactNumber,
} = require("../models/contact");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const contacts = await contact.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!contacts)
    return res.status(404).send("The card with the given ID was not found.");
  res.send(contacts);
});

router.post("/", async (req, res) => {
  const { error } = contactValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let Contact = new contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    question: req.body.question,
    contactNum: await generateContactNumber(contact),
  });

  post = await Contact.save();
  res.send(post);
});

module.exports = router;
