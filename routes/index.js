const express = require('express');
const router = express.Router();

// Define your route here
router.get('/', (req, res) => {
    res.send('Indiana Brown');
});

module.exports = router;
