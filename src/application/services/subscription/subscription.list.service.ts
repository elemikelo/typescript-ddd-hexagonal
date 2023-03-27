import { SubscriptionRepository } from "../../../domain/repositories/subscription/subscription.repository";
import { Subscription } from "../../../domain/models/subscription/subscription.model";

export class ListSubscription  {
  constructor(private readonly repository: SubscriptionRepository) {
    this.repository = repository;
  }

  async run(): Promise<Subscription[]> {
    // Aquí va toda la lógica del caso de uso
    const subs = await this.repository.getAll();
    return subs;
  }
}

