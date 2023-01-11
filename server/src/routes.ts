import express from 'express'
const router = express.Router()

import {
  getAllStations,
  getSingleStation,
} from './modules/stations/station.controller'

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/stations', getAllStations)
router.get('/stations/:id', getSingleStation)

export default router
