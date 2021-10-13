const router = require('express').Router();
const path = require('path');
const db = require('../db/db');
const DataBase = require('../db/dbManage.js');

router.get('/notes', (req, res) => {
    res.json(db)
});

router.post('/notes', (req, res) => {
    DataBase.add(req.body)
    res.json(req.body);
});

module.exports = router;