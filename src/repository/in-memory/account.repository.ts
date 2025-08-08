import { AccountStore } from '@/lib/stores/account.store'
import { Account } from '@/models/account.model'
import { IAccountRepository } from '../I-account-repository'

export class AccountRepository implements IAccountRepository {
  async findById(id: string): Promise<Account | null> {
    return AccountStore.get(id) || null
  }

  async save(account: Account): Promise<void> {
    AccountStore.set(account.id, account)
  }

  async reset(): Promise<void> {
    AccountStore.clear()
  }
}
