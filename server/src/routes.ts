import express from 'express'
const router = express.Router()

import {
  getAllJourneys,
  getSingleJourney,
} from './modules/journeys/journey.controller'

import {
  getAllStations,
  getSingleStation,
} from './modules/stations/station.controller'

router.get('/stations', getAllStations)
router.get('/stations/:id', getSingleStation)

router.get('/journeys', getAllJourneys)
router.get('/journeys/:id', getSingleJourney)

export default router
