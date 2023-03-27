import { Request, Response } from 'express';
import { CreateSubscription } from '../../application/services/subscription/subscription.create.service'
import { Subscription } from "../../domain/models/subscription/subscription.model";

export class SubscriptionCreateController  {
    constructor(private readonly createSubscription: CreateSubscription) {}

    async run(req: Request, res: Response): Promise<Response> {
        const {  id, vehicleId, startDate, endDate, isActive }  = req.body;
        const subscription: Subscription = { id, vehicleId, startDate, endDate, isActive };

        try {
            await this.createSubscription.run(subscription);
            return res.status(201);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
}