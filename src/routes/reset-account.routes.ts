import { ResetAccountController } from '@/http/controllers/reset-account.controller'
import { FastifyInstance } from 'fastify'

const resetAccountController = new ResetAccountController()

export async function resetAccoutRoutes(app: FastifyInstance) {
  app.post(
    '/reset',
    {
      schema: {
        body: {
          type: ['object', 'null'], // aceita objeto ou null
          additionalProperties: true,
        },
      },
    },
    resetAccountController.handle
  )
}
