import { Subscription } from "../models/subscription.model";

export interface SubscriptionRepository {
    create(subscription: Subscription): Promise<void>;
    getById(id: string): Promise<Subscription | null>;
    getAll(): Promise<Array<Subscription>>;
}

