/**
 * Une interface décrit la forme d’un objet.
 * Elle sert uniquement à la vérification des types (elle n’existe pas en JavaScript).
 */
interface Rocket {
  reactor: number; // puissance du réacteur
  vMax: number; // vitesse maximale
  takeOff: (action: string) => void; // méthode de décollage
}

/**
 * Une interface est très proche d’un type personnalisé (`type`)
 * MAIS elle est spécialisée pour les objets.
 */

// Exemple équivalent avec un type (commenté volontairement)
// type Rocket2 = {
//   reactor: number;
//   vMax: number;
//   takeOff: (action: string) => void;
// };

/**
 * ⚠️ Différence importante :
 * Les interfaces peuvent être "fusionnées" (merged),
 * ce qui est impossible avec les types.
 */

/**
 * Ici, on redéclare l’interface Rocket.
 * TypeScript va automatiquement fusionner
 * cette interface avec la précédente.
 */
interface Rocket {
  gaz: number; // quantité de carburant
  price: number; // prix de la fusée
}

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
class RocketFactoryClassic implements Rocket {
  reactor: number;
  vMax: number;
  gaz: number;
  price: number;

  constructor(reactor: number, vMax: number, gaz: number, price: number) {
    this.reactor = reactor;
    this.vMax = vMax;
    this.gaz = gaz;
    this.price = price;
  }

  takeOff(action: string): void {
    console.log(`🚀 Décollage en cours : ${action}`);
  }
}

// --- Version raccourcie TypeScript (déclaration des propriétés dans le constructeur) ---
// Les propriétés sont automatiquement créées et assignées grâce aux modificateurs d'accès (public ici)
class RocketFactoryTS implements Rocket {
  constructor(
    public reactor: number,
    public vMax: number,
    public gaz: number,
    public price: number
  ) {}

  takeOff(action: string): void {
    console.log(`🚀 Décollage en cours : ${action}`);
  }
}

// Les deux classes ci-dessus sont équivalentes du point de vue de l'interface Rocket.
// La version "classique" est plus verbeuse, la version "TS" est plus concise grâce au raccourci du constructeur.
