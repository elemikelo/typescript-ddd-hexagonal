import { ContainerBuilder } from 'node-dependency-injection';
import { CreateSubscriptionService } from "../Contexts/Subscriptions/application/subscription.create.service";
import { SubscriptionCreateController } from "../Contexts/Subscriptions/api/controllers/subscription.controller";
import {
    MongooseSubscriptionRepository
} from "../Contexts/Subscriptions/infrastructure/persistence/repositories/mongooseSubscription.repository";

let container = new ContainerBuilder()

export function config(container: any): void {
    container.register('MongooseSubscriptionRepository', MongooseSubscriptionRepository);
    container.register('CreateSubscriptionService', CreateSubscriptionService)
        .addArgument(container.get('MongooseSubscriptionRepository'));
    container.register('SubscriptionCreateController', SubscriptionCreateController)
        .addArgument(container.get('CreateSubscriptionService'));
}