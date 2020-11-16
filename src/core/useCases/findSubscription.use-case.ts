import {SubscriptionRepository} from "../ports/secondaries/subscriptionRepository";
import {Subscription} from "../models/subscription";
import {IFindSubscription} from "../ports/primaries/findSubscription";

export class FindSubscriptionUseCase implements IFindSubscription {
    constructor(private repository: SubscriptionRepository) {}

    async execute(name: string, formula: string, price: number): Promise<Subscription> {
        return await this.repository.get(name, formula, price);
    }
}
