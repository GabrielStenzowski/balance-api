import { AccountRepository } from '@/repository/in-memory/account.repository'
import { ResetStateUseCase } from '@/use-cases/reset-state.use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export class ResetAccountController {
  handle(request: FastifyRequest, reply: FastifyReply) {
    const accountRepository = new AccountRepository()
    const useCase = new ResetStateUseCase(accountRepository)
    useCase.execute()

    return reply.status(200).send('OK')
  }
}
