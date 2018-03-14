const express = require('express')
const router = express.Router()

const { CompaniesModel } = require('../db/schema/Companies-model')

// * async route method *
//      index route:
router.get('/', async (req, res) => {
    try {
        const CompaniesModel = await CompaniesModel.find({})
        res.json(CompaniesModel)
    } catch (err) {
        console.log(err)
    }
})
//      show route:
router.get('/:id', async (req, res) => {
    try {
        const CompaniesModelId = req.params.id
        const CompaniesModel = await CompaniesModel.findById(CompaniesModelId)
        res.json(CompaniesModel)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})
//      create route
router.post('/', async (req, res) => {
    try {
        const newCompaniesModel = req.body
        const savedCompaniesModel = await CompaniesModel.create(newCompaniesModel)
        res.json(savedCompaniesModel)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//      update route
router.put('/:id', async (req, res) => {
    try {
        const CompaniesModelId = req.params.id
        const updatedCompaniesModel = req.body
        const savedCompaniesModel = await CompaniesModel.findByIdAndUpdate(CompaniesModelId, updatedCompaniesModel)
        res.json(savedCompaniesModel)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//      delete route
router.delete('/:id', async (req, res) => {
    try {
        const CompaniesModelId = req.params.id 
        await CompaniesModel.findByIdAndRemove(CompaniesModelId)
    res.json({
        msg: 'Deleted'
    }) 
} catch (err) {
    console.log(err)
    res.status(500).json(err)
}
})

module.exports = router