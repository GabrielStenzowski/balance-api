import { Account } from '@/models/account.model'

export interface IAccountRepository {
  findById(id: string): Account | null
  save(account: Account): void
  reset(): void
}
