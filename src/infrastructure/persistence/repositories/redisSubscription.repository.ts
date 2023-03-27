import { SubscriptionRepository } from "../../../domain/repositories/subscription/subscription.repository";
import { Subscription } from "../../../domain/models/subscription/subscription.model";

export class RedisSubscription implements SubscriptionRepository {
    async getById(id: string): Promise<Subscription | null> {
        return null
        // TODO
    }

    async getAll(): Promise<Array<Subscription>> {
        return []
        // TODO
    }

    async create(subscription: Subscription): Promise<void> {
        // TODO
    }
}