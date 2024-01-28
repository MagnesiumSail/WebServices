const mongoose = require("mongoose");
const contactsModel = require("../models/contactsModel");

async function getAllContacts(req, res) {
  try {
    const contacts = await contactsModel.find({});
    console.log("Contacts:", contacts);
    res.send(contacts);
  } catch (error) {
    console.error("Error retrieving contacts:", error);
    throw error; // rethrow the error
  }
}

async function getAContact(req, res) {
  try {
    console.log(mongoose.connection.readyState);
    console.log("MongoDB URI: ", process.env.MONGODB_URI);

    const contactId = req.params.id;

    const contact = await contactsModel.findOne({ contactListing: contactId });
    if (contact) {
      console.log("Contact:", contact);
      res.send(contact);
    } else {
      res.status(404).send("Contact not found");
    }
  } catch (error) {
    console.error("Error retrieving contact:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function createContact(req, res) {
    try {
    console.log("Received data:", req.body);
      const newContact = new contactsModel(req.body);
      const savedContact = await newContact.save();
      console.log("Contact saved:", savedContact);
      res.status(201).send(savedContact);
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(400).send("Failed to create contact");
    }
  }

async function updateContact(req, res) {
  try {
    const contactId = req.params.id;
    const contact = await contactsModel.findOne({ contactListing: contactId });
    if (contact) {
      contact.set(req.body);
      const savedContact = await contact.save();
      console.log("Contact saved:", savedContact);
      res.status(204).send(savedContact);
    } else {
      res.status(404).send("Contact not found");
    }
  } catch (error) {
    res.status(400).send("Problem updating contact");
  }
}

async function deleteContact(req, res) {
  try {
    const contactId = req.params.id;
    const contact = await contactsModel.findOne({ contactListing: contactId });
    if (contact) {
        console.log("Contact found:", contact);
      const deletedContact = await contact.deleteOne();
      console.log("Contact deleted:", deletedContact);
      res.status(200).send(deletedContact);
    } else {
      res.status(404).send("Contact not found");
    }
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(400).send("Problem deleting contact");
  }
}

module.exports = {
  getAllContacts,
  getAContact,
  createContact,
  updateContact,
  deleteContact,
};
