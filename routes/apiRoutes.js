const router = require('express').Router();
const path = require('path');
const db = require('../db/db');

router.get('/notes', (req, res) => {
    res.json(db)
});

router.post('/notes', (req, res) => {
    res.json(req.body);
});

module.exports = router;