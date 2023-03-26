import { Subscription } from "../../../domain/models/subscription/subscription.model";
import { SubscriptionRepository } from "../../../domain/repositories/subscription/subscription.repository";

export interface SubscriptionServiceInterface {
    createSubscription(subscription: Omit<Subscription, 'id'>): Promise<Subscription>;
    getSubscriptionById(id: string): Promise<Subscription | null>;
    getAllSubscriptions(): Promise<Subscription[]>;
}

export class SubscriptionService implements SubscriptionServiceInterface {
    private repository: SubscriptionRepository;

    constructor(repository: SubscriptionRepository) {
        this.repository = repository;
    }

    async createSubscription(subscription: Omit<Subscription, 'id'>): Promise<Subscription> {
        const newSubscription: Subscription = {
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            ...subscription,
        };

        await this.repository.createSubscription(newSubscription);
        return newSubscription;
    }

    async getSubscriptionById(id: string): Promise<Subscription | null> {
        return this.repository.getSubscriptionById(id);
    }

    async getAllSubscriptions(): Promise<Subscription[]> {
        return Promise.resolve([]);
    }
}
