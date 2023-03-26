import mongoose from 'mongoose';
import { Subscription } from '../../../../domain/models/subscription/subscription.model'
import { SubscriptionModel, SubscriptionDocument } from "../../models/subscription.model";

export class MongooseSubscriptionAdapter {
    async findById(id: string): Promise<Subscription | null> {
        const subscription = await SubscriptionModel.findById(id).exec();
        if (!subscription) {
            return null;
        }

        return {
            id: subscription._id.toString(),
            vehicleId: subscription.vehicleId,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
            isActive: subscription.isActive,
        };
    }

    async find(): Promise<Array<Subscription> | []> {
        const subscriptions = await SubscriptionModel.find().exec();
        if (!subscriptions) {
            return [];
        }
        return subscriptions.map((subscription) => {
            return {
                id: subscription._id.toString(),
                vehicleId: subscription.vehicleId,
                startDate: subscription.startDate,
                endDate: subscription.endDate,
                isActive: subscription.isActive,
                }
        })
    }

    async save(subscription: Subscription): Promise<void> {
        // @ts-ignore
        const subscriptionDoc: SubscriptionDocument = {
            ...subscription,
            _id: new mongoose.Types.ObjectId(subscription.id),
        };
        await SubscriptionModel.create(subscriptionDoc);
    }
}