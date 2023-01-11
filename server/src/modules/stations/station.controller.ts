import { Request, Response, NextFunction } from 'express'
import { BadRequestError, InternalServerError } from '../../helpers/apiError'
import pool from '../../db/db'

const getAllStations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const q = 'SELECT * FROM stations LIMIT 50'

    pool.query(q, (err: any, data) => {
      if (err) throw new InternalServerError(err)
      return res.status(200).json(data.rows)
    })
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
    const q = 'SELECT * FROM stations WHERE station_id = $1'

    pool.query(q, [id], (err: any, data) => {
      if (err) throw new InternalServerError(err)
      return res.status(200).json(data.rows)
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export { getAllStations, getSingleStation }
