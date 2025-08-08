import { IAccountRepository } from "@/repository/I-account-repository";

export class ResetStateUseCase {
  constructor(private accountStore: IAccountRepository) {}

  execute() {
    this.accountStore.reset()
  }
}
