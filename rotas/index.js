const router = require('express').Router()
const List = require('../model/List')
require('../mongoDB/mongo')

const list = require('./list')
router.use('/list', list)


router.get('/', (req, res) => {
    res.json({
        sucess:true
    })
})



module.exports = router