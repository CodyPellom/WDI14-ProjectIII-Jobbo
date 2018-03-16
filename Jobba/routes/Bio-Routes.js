const express = require('express')
const router = express.Router()

const { BioModel } = require('../db/schema/Bio-model')

router.get("/", (req,res) => {
    BioModel.find().then((bio) => {
        res.send(bio)
    })
})

router.get("/:bioId", (req,res) => {
    BioModel.findById(req.params.bioId)
    .then((bio) => {
        res.send(bio)
    })
})

router.post("/", (req, res) => {
    const NewBio = new BioModel({
        name: req.body.name,
        location: req.body.location,
        education: req.body.education,
        experience: req.body.experience,
        description: req.body.description
        })

        NewBio.save().then((savedBio) => {
            res.redirect(`/api/bio/${savedBio._id}`)
        })

})

router.patch('/:bioId', (req, res) => {
    BioModel.findByIdAndUpdate(req.params.bioId, {
        name: req.body.name,
        location: req.body.location,
        education: req.body.education,
        experience: req.body.experience,
        description: req.body.description
    },{new:true}
).then((updatedBio) => {
    res.redirect(`/api/bio/${updatedBio._id}`)
})
})

router.delete('/:bioId', (req, res) => {
    BioModel.findByIdAndRemove(req.params.bioId)
    .then(() => {
        res.redirect('/api/bio')
    })
})



module.exports = router

