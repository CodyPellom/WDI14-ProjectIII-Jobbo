const express = require('express')
const router = express.Router()

const { PositionsModel } = require('../db/schema/Positions-model')


//index route:
router.get('/', async (req, res) => {
    try {
        const PositionsModel = await PositionsAwait.find({})
        res.json(PositionsModel)
    } catch (err) {
      console.log(err)
    }
})
//show route:
