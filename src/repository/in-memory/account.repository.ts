import { AccountStore } from '@/lib/stores/account-store'
import { Account } from '@/models/account.model'
import { IAccountRepository } from '../I-account.repository'

export class AccountRepository implements IAccountRepository {
  findById(id: string): Account | null {
    return AccountStore.get(id) || null
  }

  save(account: Account): void {
    AccountStore.set(account.id, account)
  }

  reset(): void {
    AccountStore.clear()
  }
}
