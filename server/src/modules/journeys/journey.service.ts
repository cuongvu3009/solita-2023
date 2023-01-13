import pool from '../../server'

const getAll = async (page: any, size: any) => {
  try {
    const result = await pool.query(
      'SELECT * FROM journeys WHERE distanceCoveredInMeters > 10 AND durationSeconds > 10 LIMIT $2 OFFSET (($1 - 1) * $2)',
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
      'select * from journeys where journey_id = $1',
      [id]
    )
    return result?.rows
  } catch (e: any) {
    throw new Error(e.message)
  }
}

export default {
  getAll,
  getOne,
}
