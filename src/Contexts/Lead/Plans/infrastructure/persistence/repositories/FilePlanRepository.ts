import { PlanRepository } from "../../../domain/repositories/plan.repository";
import { Plan } from "../../../domain/models/plan.model";

export class FilePlanRepository implements PlanRepository {
    getById(id: string): Promise<Plan> {
        const mockPlan: Plan = {
            id: '1',
            alias: 'Planazo',
            isOffer: true,
            name: 'Bmw serie 1'
        }
        return Promise.resolve(mockPlan)
    }
}