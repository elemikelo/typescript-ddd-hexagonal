import { Subscription } from '../../models/subscription/subscription.model';
import { SubscriptionRepository } from '../../repositories/subscription/subscription.repository';

export class SubscriptionService {
    constructor(private readonly subscriptionRepository: SubscriptionRepository) {}

    async getActives(): Promise<Array<Subscription | []>> {
        const subscriptions = await this.subscriptionRepository.getAllSubscriptions();
        return subscriptions.filter((subscription) => subscription.isActive);
    }
}