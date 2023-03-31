import {
    SubscriptionRepository
} from "../../../../../Contexts/Sales/Subscriptions/domain/repositories/subscription.repository";
import {
    CreateSubscriptionService
} from "../../../../../Contexts/Sales/Subscriptions/application/SubscriptionCreateService";
import {
    Subscription,
    SubscriptionModel
} from "../../../../../Contexts/Sales/Subscriptions/domain/models/subscription.model";

describe('SubscriptionCreateService', () => {
    it('should create a valid subscription', async () => {
        const repository: SubscriptionRepository = {
            create: jest.fn(),
            getAll: jest.fn(),
            getById: jest.fn(),
        };
        const createSubscriptionService = new CreateSubscriptionService(repository);
        const id = 'id';
        const vehicleId = 'name';
        const startDate = new Date();
        const data: Subscription = {
            id: 'id',
            vehicleId: 'vehicleId',
            startDate: '2021-01-01',
            endDate: '2021-01-01',
            isActive: true
        }

        const expectedSubscription = new SubscriptionModel(data)


        await createSubscriptionService.run(data);

        expect(repository.create).toHaveBeenCalledWith(expectedSubscription);
    });
});