import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
export default async function routes(app: FastifyInstance) {
  app.get('/health', async (request: FastifyRequest, reply: FastifyReply) => {
    return { status: 'ok' }
  })
}
