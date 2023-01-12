import { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '../../helpers/apiError'
import journeyService from './journey.service'

const getAllJourneys = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await journeyService.getAll()
    return res.json(response)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

const getSingleJourney = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const response = await journeyService.getOne(id)
    res.json(response)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export { getAllJourneys, getSingleJourney }
