import { EventController } from '@/http/controllers/event.controller'
import { FastifyInstance } from 'fastify'

export async function eventRoutes(app: FastifyInstance) {
  const eventController = new EventController()
  app.post('/event', eventController.handle)
}
