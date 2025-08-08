import { app } from './app'
import { env } from './lib/env'

const start = async () => {
  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' })
    console.log(`🚀 Server running at http://localhost:${env.PORT}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
