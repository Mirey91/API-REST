const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const petProducts = require('../sequelize');

router.get('/', (req, res) => {
    petProducts.findAll().then(product => res.json(product))
});

router.post('/', (req, res) => {
    const { name } = res.body
    if (name) {
        petProducts.create(req.body)
            .then(product => res.json(product))
    } else {
        res.status(500).json({ error: 'There was an error.' });
    }


});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    petProducts.findByPk(id)
        .then(product => { 
            if(product) {
                res.json(product); 
            } else {
                res.status(404).json({ error: 'Not found' });
            }
            
        })
});

module.exports = router;