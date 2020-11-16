import {Subscription} from "../../models/subscription";

export interface IFindSubscription {
    execute(name: string, formula: string, price: number): Promise<Subscription>
}
