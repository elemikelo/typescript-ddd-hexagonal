import { Subscription } from "../../models/subscription/subscription.model";
import { MongooseSubscriptionAdapter } from "../../../infrastructure/persistence/adapters/subscription/mongoose-subscription.adapter";

export interface SubscriptionRepositoryInterface {
    createSubscription(subscription: Subscription): Promise<void>;
    getSubscriptionById(id: string): Promise<Subscription | null>;
    getAllSubscriptions(): Promise<Array<Subscription | []>>;
}

export class SubscriptionRepository implements SubscriptionRepositoryInterface {
    private adapter: MongooseSubscriptionAdapter;

    constructor(adapter: MongooseSubscriptionAdapter) {
        this.adapter = adapter;
    }

    async getSubscriptionById(id: string): Promise<Subscription | null> {
        return this.adapter.findById(id);
    }

    async getAllSubscriptions(): Promise<Array<Subscription> | []> {
        return this.adapter.find();
    }

    async createSubscription(subscription: Subscription): Promise<void> {
        await this.adapter.save(subscription);
    }
}
