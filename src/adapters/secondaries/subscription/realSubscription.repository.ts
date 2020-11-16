import {SubscriptionRepository} from "../../../core/ports/secondaries/subscriptionRepository";
import {Subscription} from "../../../core/models/subscription";

export class RealSubscriptionRepository implements SubscriptionRepository {
    save(subscription: Subscription): Promise<void> {
        throw new Error('Not implemented yet');
    }

    get(name: string, formula: string, price: number): Promise<Subscription> {
        throw new Error('Not implemented yet');
    }
}
