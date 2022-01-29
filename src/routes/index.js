const { Routes } = require('express')
const router = Routes();

const products = require('../')


router.get('/',(req, res) =>{

    res.send(products);
});



module.exports = router;