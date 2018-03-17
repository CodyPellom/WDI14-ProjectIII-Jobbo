const express = require('express')
const router = express.Router({mergeParams:true})
const { BioModel } = require('../db/schema/Bio-model') 

const { CompaniesModel } = require('../db/schema/Companies-model')

router.get('/', (req,res) => {
    BioModel.findById(req.params.bioId).then((bio) => {
        const companies = bio.companies
        res.send(companies)
    }).catch(err => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    BioModel.findById(req.params.bioId).then((bio) => {
        const newCompany = new CompaniesModel({
            date: req.body.date,
            title: req.body.title,
            description: req.body.description,
            locations: req.body.locations,
            notes: req.body.notes
        })
        bio.companies.push(newCompany)
        return bio.save()

    }).then((savedBio) => {
        res.send(savedBio)
    })
})

router.delete('/:id', (req, res) => {
    BioModel.findById(req.params.bioId).then((bio) => {
        bio.companies.id(req.params.id).remove()
        return bio.save()
    }).then((savedBio) => {
        res.send(savedBio)
    })
})



module.exports = router