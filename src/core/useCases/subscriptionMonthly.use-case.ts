import {Subscription} from "../models/subscription";
import {SubscriptionRepository} from "../ports/secondaries/subscriptionRepository";
import {ISubscriptionMonthly} from "../ports/primaries/subscriptionMonthly";

export class SubscriptionMonthlyUseCase implements ISubscriptionMonthly {
    constructor(private repository: SubscriptionRepository) {}

    async execute(name: string, formula: string, price: number): Promise<void> {
        const newSubscription = new Subscription({paymentFrequency: "Monthly", formula, name, price});
        await this.repository.save(newSubscription);
    }
}
