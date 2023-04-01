import { Router, Request, Response } from 'express';
import container from '../../depedency-inyection';

export const register = (router: Router) => {
    const subscriptionCreateController = container.get('Sales.Subscriptions.controllers.SubscriptionCreateController');
    router.post('/subscriptions', (req: Request, res: Response) => subscriptionCreateController.run(req, res));
};