import { Account } from '@/models/account.model'

export interface IAccountRepository {
  findById(id: string): Promise<Account | null>
  save(account: Account): Promise<void>
  reset(): Promise<void>
}
