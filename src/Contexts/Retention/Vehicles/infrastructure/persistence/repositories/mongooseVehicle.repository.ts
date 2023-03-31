import mongoose from 'mongoose';
import { Vehicle } from '../../../domain/models/vehicle.model'
import { VehicleModel, VehicleDocument } from "../models/vehicle.model";
import { VehicleRepository } from '../../../domain/repositories/vehicle.repository';

export class MongooseVehicleRepository implements VehicleRepository {
    async getById(id: string): Promise<Vehicle | null> {
        const vehicle = await VehicleModel.findById(id).exec();
        if (!vehicle) {
            return null;
        }

        return {
            id: vehicle._id,
            brand: vehicle.brand,
            model: vehicle.model,
            modelYear: vehicle.modelYear,
            color: vehicle.color,
            licenseplate: vehicle.licenseplate
        };
    }

    async getAll(): Promise<Array<Vehicle>> {
        const vehicles = await VehicleModel.find().exec();
        if (!vehicles) {
            return [];
        }
        return vehicles.map((vehicle) => {
            return {
                id: vehicle._id.toString(),
                brand: vehicle.brand,
                model: vehicle.model,
                modelYear: vehicle.modelYear,
                color: vehicle.color,
                licenseplate: vehicle.licenseplate
            }
        })
    }

    async create(vehicle: Vehicle): Promise<void> {
        await VehicleModel.create(vehicle);
    }
}