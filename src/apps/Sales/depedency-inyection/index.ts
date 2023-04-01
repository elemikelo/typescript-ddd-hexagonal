import { ContainerBuilder } from 'node-dependency-injection';
import { SubscriptionContainer } from './Subscriptions/container';
let container = new ContainerBuilder();

container = SubscriptionContainer(container);

export default container;
