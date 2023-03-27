import { Request, Response } from 'express';
import { CreateSubscriptionService } from '../../application/services/subscription/subscription.create.service'
import { Subscription } from "../../domain/models/subscription/subscription.model";

export class SubscriptionCreateController  {
    constructor(private readonly createSubscriptionService: CreateSubscriptionService) {}

    async run(req: Request, res: Response): Promise<Response> {
        const {  id, vehicleId, startDate, endDate, isActive }  = req.body;
        const subscription: Subscription = { id, vehicleId, startDate, endDate, isActive };

        try {
            await this.createSubscriptionService.run(subscription);
            return res.status(201);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
}