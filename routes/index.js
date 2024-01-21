const express = require('express');
const router = express.Router();
const contacts = require('../controllers/contactsController');


// Define your route here
router.get('/', (req, res) => {
    res.send('Indiana Brown');
});

router.get('/contacts', (req, res) => {
    contacts.getAllContacts(req, res);
});

router.get("/contacts/:id", (req, res) => {
    contacts.getAContact(req, res);
});

module.exports = router;
