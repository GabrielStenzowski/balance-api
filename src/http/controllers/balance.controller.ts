import { AccountRepository } from '@/repository/in-memory/account.repository'
import { GetBalanceUseCase } from '@/use-cases/get-balance.use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

interface GetBalanceQuery {
  account_id: string
}
export class BalanceController {
  handle(
    request: FastifyRequest<{ Querystring: GetBalanceQuery }>,
    reply: FastifyReply
  ) {
    const { account_id } = request.query

    const accountRepository = new AccountRepository()
    const getBalanceUseCase = new GetBalanceUseCase(accountRepository)

    const balance = getBalanceUseCase.execute(account_id)

    if (balance === null) {
      return reply.status(404).send('0')
    }

    return reply.status(200).send(balance.toString())
  }
}
