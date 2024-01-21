const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    favoriteColor: {
        type: String
    },
    birthday: {
        type: String
    },
    contactListing: {
        type: Number
    }
});

const Contact = mongoose.model('contacts', contactSchema, 'Contacts');

module.exports = Contact;
