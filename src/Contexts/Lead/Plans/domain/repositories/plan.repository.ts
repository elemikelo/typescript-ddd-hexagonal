import { Plan } from "../models/plan.model";

export interface PlanRepository {
    getById(id: string): Promise<Plan>;
}

