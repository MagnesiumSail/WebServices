const mongoose = require('mongoose');
const contactsModel = require('../models/contactsModel');

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
            res.status(404).send('Contact not found');
        }
    } catch (error) {
        console.error("Error retrieving contact:", error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getAllContacts, getAContact}