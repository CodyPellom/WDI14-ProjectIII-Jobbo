const express = require('express')
const router = express.Router()

const { PositionsModel } = require('../db/schema/Positions-model')

// * async route method *
//      index route:
router.get('/:id', async (req, res) => {
    try {
        const PositionsModel = await PositionsModel.find({})
        res.json(PositionsModel)
    } catch (err) {
        console.log(err)
    }
})
//      show route:
router.get('/', (req, res) => {
    try {
        const PositionsModelId = req.params.id
        const PositionsModel = await PositionsModel.findById(PositionsModelId)
        res.json(PositionsModel)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})
//      create route
router.post('/', async (req, res) => {
    try {
        const newPositionsModel = req.body
        const savedPositionsModel = await PositionsModel.create(newPositionsModel)
        res.json(savedPositionsModel)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//      update route
router.put('/:id', async (req, res) => {
    try {
        const PositionsModelId = req.params.id
        const updatedPositionsModel = await PositionsModel.findByIdAndUpdate(PositionsModelId, updatedPositionsModel)
        res.json(savedPositionsModel)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//      delete route
router.delete('/:id', async (req, res) => {
    try {
        const PositionsModelId = req.params.id 
        await PositionsModel.findByIdAndRemove(PositionsModelId)
    res.json({
        msg: 'Deleted'
    }) 
} catch (err) {
    console.log(err)
    res.status(500).json(err)
}
})

