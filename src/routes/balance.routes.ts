import { BalanceController } from '@/http/controllers/balance.controller'
import { FastifyInstance } from 'fastify'

export async function balanceRoutes(app: FastifyInstance) {
  const balanceController = new BalanceController()
  app.get('/balance', balanceController.handle)
}
