import BSON from 'bson';
import fs from 'fs';
import { Subscription } from "../../../domain/models/subscription.model";
import { SubscriptionRepository } from "../../../domain/repositories/subscription.repository";

export class FileCourseRepository implements SubscriptionRepository {
    private FILE_PATH = `${__dirname}/courses`;

    async create(subscription: Subscription): Promise<void> {
        fs.promises.writeFile(this.filePath(subscription.id), BSON.serialize(subscription));
    }

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`;
    }

    getAll(): Promise<Array<Subscription>> {
        const subscriptions = [{
            id: '1',
            vehicleId: '1',
            startDate: '2021-01-01',
            endDate: '2021-01-01',
            isActive: true }]


        return Promise.resolve(subscriptions)
    }

    getById(id: string): Promise<Subscription> {
        const subscription: Subscription = {
            id: '1',
            vehicleId: '1',
            startDate: '2021-01-01',
            endDate: '2021-01-01',
            isActive: true }
        return Promise.resolve(subscription)
    }
}