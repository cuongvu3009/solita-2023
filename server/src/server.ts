import errorhandler from 'errorhandler'
import { Client } from 'pg'

import app from './app'

// const connectDb = async () => {
//   try {
//     const client = new Client({
//       user: process.env['PGUSER'],
//       host: process.env['PGHOST'],
//       database: process.env['PGDATABASE'],
//       password: process.env['PGPASSWORD'],
//       port: 5432,
//     })
//     await client.connect()
//     console.log('  Database connected!')
//   } catch (error) {
//     console.log(error)
//   }
// }

const start = async () => {
  try {
    //	Start DB connection
    // await connectDb()
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
app.use(errorhandler())
