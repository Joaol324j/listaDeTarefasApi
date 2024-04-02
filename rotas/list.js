const router = require('express').Router()
const List = require('../model/List')


router.get('/', async (req, res) => {
    const list = await List.find()
    return res.send(list)
})

router.post('/', async (req, res) => {
    const list = new List({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    })
    await list.save()
    return res.send(list)
})

router.delete('/:id', async (req, res) => {
    const list = await List.findByIdAndDelete(req.params.id)
    return res.send(list)
})

router.put('/:id', async (req, res) => {
    const list = await List.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    })
    return res.send(list)
})


module.exports = router