import { AccountRepository } from '@/repository/in-memory/account.repository'
import { CreateEventUseCase } from '@/use-cases/create-event.use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

interface EventBody {
  type: 'deposit' | 'withdraw' | 'transfer'
  origin?: string
  destination?: string
  amount: number
}
export class EventController {
  handle(request: FastifyRequest<{ Body: EventBody }>, reply: FastifyReply) {
    const accountRepository = new AccountRepository()
    const createEventUseCase = new CreateEventUseCase(accountRepository)

    const result = createEventUseCase.execute(request.body)

    if (result === null) {
      return reply.status(404).send('0')
    }

    return reply.status(201).send(result)
  }
}
