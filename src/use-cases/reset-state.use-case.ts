import { IAccountRepository } from '@/repository/I-account.repository'

export class ResetStateUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  execute() {
    this.accountRepository.reset()
  }
}
