import express from 'express'
const router = express.Router()

import {
  getAllJourneys,
  getSingleJourney,
} from './modules/journeys/journey.controller'

import {
  getAllStations,
  getDepartJourneyFromStation,
  getReturnJourneyFromStation,
  getSingleStation,
} from './modules/stations/station.controller'

router.get('/stations', getAllStations)
router.get('/stations/:id', getSingleStation)
router.get('/stations/stats/returnjourneys', getReturnJourneyFromStation)
router.get('/stations/stats/departjourneys', getDepartJourneyFromStation)

router.get('/journeys', getAllJourneys)
router.get('/journeys/:id', getSingleJourney)

export default router
