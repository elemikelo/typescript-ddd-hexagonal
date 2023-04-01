import {
    FileSubscriptionRepository
} from "../../../../Contexts/Sales/Subscriptions/infrastructure/persistence/repositories/FileSubscriptionRepository";
import {
    FilePlanRepository
} from "../../../../Contexts/Lead/Plans/infrastructure/persistence/repositories/FilePlanRepository";
import {
    CreateSubscriptionService
} from "../../../../Contexts/Sales/Subscriptions/application/SubscriptionCreateService";
import { SubscriptionCreateController } from "../../api/controllers/SubscriptionCreateController";

export const SubscriptionContainer = (container: any) => {
    // Repositories
    container
        .register('Sales.Subscriptions.domain.SubscriptionRepository', FileSubscriptionRepository)

    container
        .register('Sales.Lead.Plans.domain.PlanRepository', FilePlanRepository)

    // Services
    container
        .register('Sales.Subscriptions.application.SubscriptionCreateService', CreateSubscriptionService)
        .addArgument('Sales.Lead.Plans.domain.PlanRepository')
        .addArgument('Sales.Subscriptions.domain.SubscriptionRepository')

    // Controllers
    container
        .register('Sales.Subscriptions.controllers.SubscriptionCreateController', SubscriptionCreateController)
        .addArgument('Sales.Subscriptions.application.SubscriptionCreateService')

    return container
}