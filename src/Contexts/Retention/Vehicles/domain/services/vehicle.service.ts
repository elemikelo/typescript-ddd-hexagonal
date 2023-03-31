import { Vehicle } from "../models/vehicle.model";

export interface VehicleService {
    createVehicle(vehicle: Vehicle): Promise<Vehicle>;
    getVehicleById(id: string): Promise<Vehicle | null>;
    getAllVehicles(): Promise<Vehicle[]>;
    updateVehicle(vehicle: Vehicle): Promise<Vehicle>;
    deleteVehicle(id: string): Promise<void>;
}
