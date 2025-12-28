/**
 * Résultat final :
 * Rocket doit maintenant contenir :
 * reactor, vMax, takeOff, gaz, price
 */
/**
 * Les interfaces fonctionnent très bien avec les classes.
 * La classe DOIT implémenter toutes les propriétés
 * et méthodes définies dans l’interface.
 */
// --- Version classique (déclaration des propriétés + this) ---
class RocketFactoryClassic {
    reactor;
    vMax;
    gaz;
    price;
    constructor(reactor, vMax, gaz, price) {
        this.reactor = reactor;
        this.vMax = vMax;
        this.gaz = gaz;
        this.price = price;
    }
    takeOff(action) {
        console.log(`🚀 Décollage en cours : ${action}`);
    }
}
// --- Version raccourcie TypeScript (déclaration des propriétés dans le constructeur) ---
// Les propriétés sont automatiquement créées et assignées grâce aux modificateurs d'accès (public ici)
class RocketFactoryTS {
    reactor;
    vMax;
    gaz;
    price;
    constructor(reactor, vMax, gaz, price) {
        this.reactor = reactor;
        this.vMax = vMax;
        this.gaz = gaz;
        this.price = price;
    }
    takeOff(action) {
        console.log(`🚀 Décollage en cours : ${action}`);
    }
}
export {};
// Les deux classes ci-dessus sont équivalentes du point de vue de l'interface Rocket.
// La version "classique" est plus verbeuse, la version "TS" est plus concise grâce au raccourci du constructeur.
//# sourceMappingURL=script.js.map