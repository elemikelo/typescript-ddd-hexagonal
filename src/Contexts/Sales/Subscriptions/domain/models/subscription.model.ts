export interface Subscription {
    id: string;
    planId: string;
    vehicleId: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
}

export class SubscriptionModel implements Subscription {
    readonly id: string;
    readonly planId: string;
    readonly vehicleId: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly isActive: boolean;


    constructor(params: {
        id: string,
        planId: string,
        vehicleId: string,
        startDate: string,
        endDate: string
        isActive: boolean
    }) {
        this.id = params.id;
        this.planId = params.planId;
        this.vehicleId = params.vehicleId;
        this.startDate = params.startDate;
        this.endDate = params.endDate;
        this.isActive = params.isActive;
    }
}