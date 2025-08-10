import { Account } from '@/models/account.model'
import { IAccountRepository } from '@/repository/I-account.repository'

interface EventProps {
  type: 'deposit' | 'withdraw' | 'transfer'
  origin?: string
  destination?: string
  amount: number
}

type EventHandler = (data: EventProps) => object | null

export class CreateEventUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  execute(data: EventProps) {
    const { type, origin, destination, amount } = data

    if (type === 'deposit') {
      let account = this.accountRepository.findById(destination!)
      if (!account) {
        account = new Account(destination!, amount)
        this.accountRepository.save(account)
      } else {
        account.balance += amount
      }
      return { destination: { id: account.id, balance: account.balance } }
    }

    if (type === 'withdraw') {
      const account = this.accountRepository.findById(origin!)
      if (!account) {
        return null // 404
      }
      account.balance -= amount
      return { origin: { id: account.id, balance: account.balance } }
    }

    if (type === 'transfer') {
      const originAccount = this.accountRepository.findById(origin!)
      if (!originAccount) {
        return null
      }
      originAccount.balance -= amount

      let destinationAccount = this.accountRepository.findById(destination!)
      if (!destinationAccount) {
        destinationAccount = new Account(destination!, amount)
        this.accountRepository.save(destinationAccount)
      } else {
        destinationAccount.balance += amount
      }

      return {
        origin: { id: originAccount.id, balance: originAccount.balance },
        destination: {
          id: destinationAccount.id,
          balance: destinationAccount.balance,
        },
      }
    }

    throw new Error('Invalid event type')
  }
}
