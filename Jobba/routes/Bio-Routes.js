const express = require('express')
const router = express.Router()

const { BioModel } = require('../db/schema/Bio-model')

// * async route method *
//      index route:
router.get('/', async (req, res) => {
    try {
        const BioModel = await BioModel.find({})
        res.json(BioModel)
    } catch (err) {
        console.log(err)
    }
})
//      show route:
router.get('/:id', async (req, res) => {
    try {
        const BioModelId = req.params.id
        const BioModel = await BioModel.findById(BioModelId)
        res.json(BioModel)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})
//      create route
router.post('/', async (req, res) => {
    try {
        const newBioModel = req.body
        const savedBioModel = await BioModel.create(newBioModel)
        res.json(savedBioModel)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//      update route
router.put('/:id', async (req, res) => {
    try {
        const BioModelId = req.params.id
        const updatedBioModel = req.body
        const savedBioModel = await BioModel.findByIdAndUpdate(BioModelId, updatedBioModel)
        res.json(savedBioModel)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//      delete route
router.delete('/:id', async (req, res) => {
    try {
        const BioModelId = req.params.id 
        await BioModel.findByIdAndRemove(BioModelId)
    res.json({
        msg: 'Deleted'
    }) 
} catch (err) {
    console.log(err)
    res.status(500).json(err)
}
})

