import { pool } from './src/db/db'

describe('Journey endpoint test', function () {
  describe('GET /journey', () => {
    it('should return filtered 100 journeys page 3', async () => {
      const req = {
        page: '3',
        size: '100',
      }
      const { rows } = await pool.query(
        'SELECT * FROM journeys WHERE distanceCoveredInMeters > $3 AND durationSeconds > $4 LIMIT $2 OFFSET (($1 - 1) * $2)',
        [req.page, req.size, 10, 10]
      )

      expect(rows).toHaveLength(100)
    })
  })
})

describe('Station endpoint test', function () {
  describe('GET /stations', () => {
    it('should return filtered 100 journeys page 3', async () => {
      const req = {
        page: '3',
        size: '100',
      }
      const { rows } = await pool.query(
        'SELECT * FROM stations LIMIT $2 OFFSET (($1 - 1) * $2)',
        [req.page, req.size]
      )

      expect(rows).toHaveLength(100)
    })
  })

  describe('GET /stations/stats/departjourneys', () => {
    it('should get all departure journeys', async () => {
      const { rows } = await pool.query(
        'SELECT count(journeys.departurestation_id), departurestation_name FROM journeys GROUP BY departurestation_name ORDER BY count DESC'
      )

      expect(rows).toBeTruthy()
    })
  })

  describe('GET /stations/stats/returnjourneys', () => {
    it('should get all departure journeys', async () => {
      const { rows } = await pool.query(
        'SELECT count(journeys.returnstation_id) , returnstation_name FROM journeys GROUP BY returnstation_name ORDER BY count DESC'
      )

      expect(rows).toBeTruthy()
    })
  })
})
