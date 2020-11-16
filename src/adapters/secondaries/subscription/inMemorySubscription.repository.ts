import {Subscription} from "../../../core/models/subscription";
import {SubscriptionRepository} from "../../../core/ports/secondaries/subscriptionRepository";

export class InMemorySubscriptionRepository implements SubscriptionRepository {
    private subscriptionList: Subscription[] = [];

    save(subscription: Subscription): Promise<void> {
        this.subscriptionList.push(subscription);
        return Promise.resolve(undefined);
    }

    get(name: string, formula: string, price: number): Promise<Subscription> {
        const subscription: Subscription = this.subscriptionList.find(sub => sub.name === name && sub.formula === formula && sub.price === price);;
        return Promise.resolve(subscription);
    }
}
