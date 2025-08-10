import Fastify from 'fastify'

import routes from './routes'
import { resetAccoutRoutes } from './routes/reset-account.routes'
import { balanceRoutes } from './routes/balance.routes'
import { eventRoutes } from './routes/event.routes'

export const app = Fastify()

app.addContentTypeParser(
  'application/json',
  { parseAs: 'string' },
  (req, body, done) => {
    if (!body) {
      done(null, {})
      return
    }

    try {
      const jsonString = typeof body === 'string' ? body : body.toString()
      const json = JSON.parse(jsonString)
      done(null, json)
    } catch (err) {
      done(err as Error)
    }
  }
)

app.register(routes)
app.register(resetAccoutRoutes)
app.register(balanceRoutes)
app.register(eventRoutes)
