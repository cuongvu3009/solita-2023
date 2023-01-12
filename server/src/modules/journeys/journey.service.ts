import pool from '../../server'

const getAll = async (page, size) => {
  try {
    const result = await pool.query(
      'select * from journeys LIMIT $2 OFFSET (($1 - 1) * $2)',
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
