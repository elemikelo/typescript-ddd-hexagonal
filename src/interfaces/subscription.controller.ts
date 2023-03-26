import {Request, Response} from 'express';
import { SubscriptionService } from '../application/services/subscription/subscription.service';
export interface SubscriptionControllerInterface {
    createSubscription(req: Request, res: Response): Promise<Response>;
}

export class SubscriptionController implements SubscriptionControllerInterface {
    constructor(private readonly subscriptionService: SubscriptionService) {}

    async createSubscription(req: Request, res: Response): Promise<Response> {
        const {  id, vehicleId, startDate, endDate, isActive }  = req.body;
        const subscription = { id, vehicleId, startDate, endDate, isActive };
        try {
            await this.subscriptionService.createSubscription(subscription);
            return res.status(201);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
}