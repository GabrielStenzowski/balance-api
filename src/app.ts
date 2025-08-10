import Fastify from 'fastify'

import routes from './routes'
import { resetAccoutRoutes } from './routes/reset-account.routes'
import { balanceRoutes } from './routes/balance.routes'
import { eventRoutes } from './routes/event.routes'

export const app = Fastify()

app.register(routes)
app.register(resetAccoutRoutes)
app.register(balanceRoutes)
app.register(eventRoutes)
