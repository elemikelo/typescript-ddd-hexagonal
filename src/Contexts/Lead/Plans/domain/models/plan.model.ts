export interface Plan {
    id: string;
    name: string;
    isOffer: boolean;
    alias: string;
}

export class PlanModel implements Plan {
    readonly id: string;
    readonly isOffer: boolean;
    readonly alias: string;
    readonly name: string;

    constructor(params: {
        id: string,
        isOffer: boolean,
        alias: string,
        name: string
    }) {
        this.id = params.id;
        this.alias = params.alias;
        this.isOffer = params.isOffer;
        this.name = params.name;
    }
}