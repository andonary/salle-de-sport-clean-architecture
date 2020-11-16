interface ISubscription {
    price: number;
    name: string;
    formula: string;
    paymentFrequency: string;
}

export class Subscription implements ISubscription {
    price: number;
    name: string;
    formula: string;
    paymentFrequency: string;

    constructor(subscription: Partial<ISubscription>) {
        Object.assign(this, subscription);
    }
}
