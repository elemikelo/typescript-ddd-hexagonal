import { Subscription } from "../../../domain/models/subscription/subscription.model";
import { SubscriptionRepository } from "../../../domain/repositories/subscription/subscription.repository";

export class CreateSubscriptionService {
  constructor(private readonly repository: SubscriptionRepository) {
    this.repository = repository;
  }
  
  async run(subscription: Subscription): Promise<void> {
    // Aquí va toda la lógica del caso de uso
    await this.repository.create(subscription);
  }
}
