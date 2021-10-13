const router = require('express').Router();
const DataBase = require('../db/dbManage.js');

router.get('/notes', (req, res) => {
    res.json(DataBase.read())
});

router.post('/notes', (req, res) => {
    DataBase.add(req.body)
    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    DataBase.remove(req.params.id)
    res.json(req.body);
});

module.exports = router;