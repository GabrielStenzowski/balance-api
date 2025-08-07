import Fastify from 'fastify'

export const app = Fastify()

app.register('/health', async (request: any, reply: any) => {
  return { status: 'ok' }
})
