import mongoose from 'mongoose';
import { Subscription } from '../../../domain/models/subscription.model'
import { SubscriptionModel, SubscriptionDocument } from "../models/subscription.model";
import { SubscriptionRepository } from '../../../domain/repositories/subscription.repository';

export class MongooseSubscriptionRepository implements SubscriptionRepository {
    async getById(id: string): Promise<Subscription | null> {
        const subscription = await SubscriptionModel.findById(id).exec();
        if (!subscription) {
            return null;
        }

        return {
            id: subscription._id.toString(),
            planId: subscription.planId,
            vehicleId: subscription.vehicleId,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
            isActive: subscription.isActive,
        };
    }

    async getAll(): Promise<Array<Subscription>> {
        const subscriptions = await SubscriptionModel.find().exec();
        if (!subscriptions) {
            return [];
        }
        return subscriptions.map((subscription) => {
            return {
                id: subscription._id.toString(),
                planId: subscription.planId,
                vehicleId: subscription.vehicleId,
                startDate: subscription.startDate,
                endDate: subscription.endDate,
                isActive: subscription.isActive,
            }
        })
    }

    async create(subscription: Subscription): Promise<void> {
        await SubscriptionModel.create(subscription);
    }
}