import {Subscription, SubscriptionModel} from "../domain/models/subscription.model";
import { SubscriptionRepository } from "../domain/repositories/subscription.repository";

export class CreateSubscriptionService {
  constructor(private readonly repository: SubscriptionRepository) {
    this.repository = repository;
  }
  
  async run(subscription: Subscription): Promise<void> {
    const newSubscription = new SubscriptionModel(subscription)

    await this.repository.create(newSubscription);
  }
}
