import pool from '../../server'

const getAll = async (page: any, size: any) => {
  try {
    const result = await pool.query(
      'SELECT * FROM stations LIMIT $2 OFFSET (($1 - 1) * $2)',
      [page, size]
    )
    return result?.rows
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const getOne = async (id: string) => {
  try {
    const result = await pool.query(
      'select * from stations where station_id = $1',
      [id]
    )
    return result?.rows
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const getAllDepartureJourneys = async () => {
  try {
    const result = await pool.query(
      'SELECT count(journeys.departurestation_id), departurestation_name FROM journeys GROUP BY departurestation_name ORDER BY count DESC'
    )
    return result?.rows
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const getAllReturnJourneys = async () => {
  try {
    const result = await pool.query(
      'SELECT count(journeys.returnstation_id) , returnstation_name FROM journeys GROUP BY returnstation_name ORDER BY count DESC'
    )
    return result?.rows
  } catch (e: any) {
    throw new Error(e.message)
  }
}

export default {
  getAll,
  getOne,
  getAllDepartureJourneys,
  getAllReturnJourneys,
}
