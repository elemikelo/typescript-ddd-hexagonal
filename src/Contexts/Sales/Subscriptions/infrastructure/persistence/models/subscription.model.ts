import { Subscription } from '../../../domain/models/subscription.model'
import mongoose, { Schema, Document } from 'mongoose';

export interface SubscriptionDocument extends Document, Omit<Subscription, 'id'> {} {}

const SubscriptionSchema = new Schema<SubscriptionDocument>({
    vehicleId: { type: String, required: true },
    planId: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, required: true },
});

export const SubscriptionModel = mongoose.model<SubscriptionDocument>('Subscription', SubscriptionSchema);