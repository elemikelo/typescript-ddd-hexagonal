import { VehicleRepository } from "../../../domain/repositories/vehicle.repository";
import { Vehicle } from "../../../domain/models/vehicle.model";

export class RedisVehicleRepository implements VehicleRepository {
    async getById(id: string): Promise<Vehicle | null> {
        return null
        // TODO
    }

    async getAll(): Promise<Array<Vehicle>> {
        return []
        // TODO
    }

    async create(subscription: Vehicle): Promise<void> {
        // TODO
    }
}