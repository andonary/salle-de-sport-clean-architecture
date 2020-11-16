export interface ISubscriptionMonthly {
    execute(name: string, formula: string, price: number): Promise<void>
}
