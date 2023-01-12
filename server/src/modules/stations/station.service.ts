import pool from '../../server'

const getAll = async () => {
  try {
    const result = await pool.query('select * from stations LIMIT 200')
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

export default {
  getAll,
  getOne,
}
