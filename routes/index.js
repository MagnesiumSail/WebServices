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

router.post("/contacts", (req, res) => {
    contacts.createContact(req, res);
});

router.put("/contacts/:id", (req, res) => {
    contacts.updateContact(req, res);
});

router.delete("/contacts/:id", (req, res) => {
    contacts.deleteContact(req, res);
});

module.exports = router;
