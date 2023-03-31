import { SubscriptionRepository } from "../domain/repositories/subscription.repository";
import { Subscription } from "../domain/models/subscription.model";

export class ListSubscriptionService  {
  constructor(private readonly repository: SubscriptionRepository) {
    this.repository = repository;
  }

  async run(): Promise<Subscription[]> {
    // Aquí va toda la lógica del caso de uso
    const subs = await this.repository.getAll();
    return subs;
  }
}

