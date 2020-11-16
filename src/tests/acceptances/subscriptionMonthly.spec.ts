/**
 * Souscription d'un abonné,
 * en tant que réceptionniste,
 * afin que les clients puissent accéder à la salle de sport,
 * je peux leur souscrire un nouvel abonnement
 *
` * Scénario : souscription d'un nouveau client - paiement mensuel
 *  Sachant que le client identifiant client@hotmail.com n'a pas d'abonnement
 *  Et que la formule "form" avec un tarif à 100 euros par mois existe
 *  Quand le réceptionniste réalise la souscription à la formule "form" du client "client@hotmail.com" en paiement mensuel
 *  Alors le client identifié "client@hotmail.com" a un abonnement à 100euros par mois`
 **/

import {Client} from "../../core/models/client";
import {Subscription} from "../../core/models/subscription";
import {InMemorySubscriptionRepository} from "../../adapters/secondaries/subscription/inMemorySubscription.repository";
import {FindSubscriptionUseCase} from "../../core/useCases/findSubscription.use-case";
import {SubscriptionMonthlyUseCase} from "../../core/useCases/subscriptionMonthly.use-case";

describe(` Feature:
     * Souscription d'un abonné,
     * en tant que réceptionniste,
     * afin que les clients puissent accéder à la salle de sport,
     * je peux leur souscrire un nouvel abonnement
`, () => {
    describe(` Scénario:
     * Sachant que le client identifiant client@hotmail.com n'a pas d'abonnement
     *  Et que la formule "form" avec un tarif à 100 euros par mois existe
     *  Quand le réceptionniste réalise la souscription à la formule "form" du client "client@hotmail.com" en paiement mensuel
     *  Alors le client identifié "client@hotmail.com" a un abonnement à 100euros par mois
 `, () => {

        const client = new Client({name: "Robert", isSubscribe: false, email: "client@hotmail.com"});
        const {email, isSubscribe} = client;
        const subscription = new Subscription({price: 100, formula: "form"});
        const {formula, price} = subscription;
        const inMemoryRepository = new InMemorySubscriptionRepository();

        it(`should accept my client 'client@hotmail.com' who does not have subscription
        and my subscription form is at 100 euros per month`, () => {
            expect(email).toEqual('client@hotmail.com');
            expect(isSubscribe).toEqual(false);
            expect(formula).toEqual('form');
            expect(price).toEqual(100);
        })

        it(`should allow customer to realize subscription`, () => {
            new SubscriptionMonthlyUseCase(inMemoryRepository).execute(client.name, formula, price);
        })

        it(`should give to the client, the subscription at 100 euros per month`, async () => {
            const subscriptionFound: Subscription = await new FindSubscriptionUseCase(inMemoryRepository).execute(client.name, formula, price);
            expect(subscriptionFound.name).toEqual(client.name);
            expect(subscriptionFound.price).toEqual(100);
            expect(subscriptionFound.formula).toEqual('form');
            expect(subscriptionFound.paymentFrequency).toEqual('Monthly');
        })
    })
})
