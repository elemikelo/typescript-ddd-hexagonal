import { Subscription } from '../models/subscription.model';
import { SubscriptionRepository } from '../repositories/subscription.repository';

export class SubscriptionGetActivesDomainService {
    constructor(private readonly subscriptionRepository: SubscriptionRepository) {}

    async getActives(): Promise<Array<Subscription>> {
        const subscriptions = await this.subscriptionRepository.getAll();
        return subscriptions.filter((subscription) => subscription.isActive);
    }
}