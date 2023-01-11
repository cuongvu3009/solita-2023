import errorHandler from 'errorhandler'
import { Client } from 'pg'

import app from './app'

const connectDb = async () => {
  try {
    const client = new Client({
      user: process.env['PGUSER'],
      host: process.env['PGHOST'],
      database: process.env['PGDATABASE'],
      password: process.env['PGPASSWORD'],
      port: 5432,
    })
    await client.connect()
    const res1 = await client.query('SELECT * FROM journeys')
    const res2 = await client.query('SELECT * FROM stations')

    if (res1 && res2) {
      console.log('  Database connected!')
    }
    await client.end()
  } catch (error) {
    console.log(error)
  }
}

const start = async () => {
  try {
    //	Start DB connection
    await connectDb()
    // Start Express server
    await app.listen(app.get('port'), () => {
      console.log(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
      )
      console.log('  Press CTRL-C to stop\n')
    })
  } catch (error: unknown) {
    console.log(
      'Postgresql connection error. Please make sure Postgresql is running. ' +
        error
    )
    process.exit(1)
  }
}

start()

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler())
