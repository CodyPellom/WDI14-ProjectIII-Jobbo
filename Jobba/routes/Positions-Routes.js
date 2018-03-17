const express = require('express')
const router = express.Router({mergeParams:true})
const { BioModel } = require('../db/schema/Bio-model')

const { PositionsModel } = require('../db/schema/Positions-model')


router.get('/', (req, res) => {
    PositionsModel.findById(req.params.bioId).then((bio) => {
        const positions = bio.positions
        res.send(positions)
    }).catch(err => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    BioModel.findById(req.params.bioId).then((bio) => {
        const newPosition = new PositionsModel({
            date: req.body.date,
            title: req.body.title,
            compensation: req.body.compensation,
            comments: req.body.compensation   
        })
        bio.positions.push(newPosition)
        return bio.save()
    }).then((saveBio) => {
        res.send(savedBio)
    })
})


router.delete('/:id', (req, res) => {
    BioModel.findById(req.params.bioId).then((bio) => {
    bio.positions.id(req.params.id)
    return bio.save()
    }).then((savedBio => {
        res.send(savedBio)
    }))
})

module.exports = router