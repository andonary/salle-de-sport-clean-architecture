interface IClient {
    name: string;
    isSubscribe: boolean;
    email: string;
}

export class Client implements IClient {
    name: string;
    isSubscribe: boolean;
    email: string;

    constructor(client: Partial<IClient>) {
        Object.assign(this, client);
    }
}
