import { IAccountRepository } from '@/repository/I-account.repository'

interface ResetStateResponse {
  success: boolean
  message: string
}

export class ResetStateUseCase {
  constructor(private accountRepository: IAccountRepository) {}

  execute() {
    this.accountRepository.reset()
  }
}
