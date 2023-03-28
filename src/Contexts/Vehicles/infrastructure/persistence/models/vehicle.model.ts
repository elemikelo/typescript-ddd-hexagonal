import { Vehicle } from '../../../domain/models/vehicle.model'
import mongoose, { Schema, Document } from 'mongoose';

export interface VehicleDocument extends Document, Omit<Vehicle, 'id'> {} {}

const VehicleSchema = new Schema<VehicleDocument>({
    brand: { type: String, trim: true, uppercase: true },
    model: String,
    modelYear: String,
    color: String,
    licenseplate: { type: String, uppercase: true, index: { unique: true, sparse: true } }
});

export const VehicleModel = mongoose.model<VehicleDocument>('Vehicle', VehicleSchema);