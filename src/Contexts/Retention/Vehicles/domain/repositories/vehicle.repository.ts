import { Vehicle } from "../models/vehicle.model";

export interface VehicleRepository {
    create(vehicle: Vehicle): Promise<void>;
    getById(id: string): Promise<Vehicle | null>;
    getAll(): Promise<Array<Vehicle>>;
}

