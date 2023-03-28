import { Router } from 'express';
import { ContainerBuilder } from 'node-dependency-injection';
let container = new ContainerBuilder()

export function SubscriptionRouter(container: any): Router {
    const router = Router();
    const subscriptionCreateController = container.get('SubscriptionCreateController');
    router.post('/subscriptions', async (req, res) => {
        await subscriptionCreateController.run(req, res);
    });

    return router;
}