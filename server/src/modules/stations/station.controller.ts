import { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '../../helpers/apiError'
import stationService from './station.service'

const getAllStations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { page, size } = req.query
    const response = await stationService.getAll(page, size)
    return res.json(response)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

const getSingleStation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const response = await stationService.getOne(id)
    res.json(response)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export { getAllStations, getSingleStation }
