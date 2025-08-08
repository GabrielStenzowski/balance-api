export class Account {
  constructor(public id: string, public balance: number) {}

  deposit(amount: number) {
    this.balance += amount
  }

  withdraw(amount: number) {
    if (this.balance < amount) {
      throw new Error('Insufficient funds')
    }
    this.balance -= amount
  }
}
