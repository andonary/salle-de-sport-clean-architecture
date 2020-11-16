import {Subscription} from "../../models/subscription";

export interface SubscriptionRepository {
    save(subscription: Subscription): Promise<void>
    get(name: string, formula: string, price: number): Promise<Subscription>
}
