const router = require('express').Router();
const path = require('path');
const db = require('../db/db');

router.get('/notes', (req, res) => {
    res.send("Notes")
});

router.post('/notes', (req, res) => {
    res.send("Create Note");
});

module.exports = router;