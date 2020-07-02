const { Router } = require('express');
const router = Router();

const petStore = require('../sample.json');

router.get('/', (req, res) => {
    res.json(petStore)
});


module.exports = router