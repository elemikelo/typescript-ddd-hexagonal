import { Plan } from '../../../domain/models/plan.model'
import mongoose, { Schema, Document } from 'mongoose';

export interface PlanDocument extends Document, Omit<Plan, 'id'> {} {}

const PlanSchema = new Schema<PlanDocument>({
    name: { type: String, required: true },
    alias: { type: String, required: true },
    isOffer: { type: Boolean, required: true },
});

export const PlanModel = mongoose.model<PlanDocument>('Plan', PlanSchema);