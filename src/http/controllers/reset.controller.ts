import { AccountRepository } from '@/repository/in-memory/account.repository'
import { ResetStateUseCase } from '@/use-cases/reset-state.use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
export async function resetAccount(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const accountRepository = new AccountRepository()
    const useCase = new ResetStateUseCase(accountRepository)

    const result = await useCase.execute()
    return reply.status(200).send(result)
  } catch (error) {
    return reply.status(500).send(error)
  }
}
