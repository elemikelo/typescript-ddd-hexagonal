import { Request, Response } from 'express';
import { CreateSubscriptionService } from '../../../../Contexts/Sales/Subscriptions/application/SubscriptionCreateService'
import { Subscription } from "../../../../Contexts/Sales/Subscriptions/domain/models/subscription.model";
import { Controller } from "./Controller";

export class SubscriptionCreateController implements Controller {
    constructor(private createSubscriptionService: CreateSubscriptionService) {}

    async run(req: Request, res: Response) {
        const {  id, vehicleId, startDate, endDate, isActive }  = req.body;
        const subscription: Subscription = { id, vehicleId, startDate, endDate, isActive };

        try {
            await this.createSubscriptionService.run(subscription);
            res.status(201);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
}