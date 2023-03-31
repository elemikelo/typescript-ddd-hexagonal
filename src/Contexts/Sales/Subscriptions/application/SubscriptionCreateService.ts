import { Subscription, SubscriptionModel } from "../domain/models/subscription.model";
import { SubscriptionRepository } from "../domain/repositories/subscription.repository";
import { PlanRepository } from "../../../Lead/Plans/domain/repositories/plan.repository";

export class CreateSubscriptionService {
  constructor(
      private readonly planRepository: PlanRepository,
      private readonly subscriptionRepository: SubscriptionRepository) {
  }
  
  async run(subscription: Subscription): Promise<void> {
    const plan = await this.planRepository.getById(subscription.planId);

    if (!plan) {
      throw new Error('Plan not found');
    }

    const newSubscription = new SubscriptionModel(subscription)

    await this.subscriptionRepository.create(newSubscription);
  }
}
