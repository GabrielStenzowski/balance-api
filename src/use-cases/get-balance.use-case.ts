import { IAccountRepository } from '@/repository/I-account.repository'

export class GetBalanceUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  execute(accountId: string) {
    const account = this.accountRepository.findById(accountId)
    if (!account) {
      return null
    }
    return account.balance
  }
}
