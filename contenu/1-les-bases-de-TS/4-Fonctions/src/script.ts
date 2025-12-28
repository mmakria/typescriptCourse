// ======================
// LES FONCTIONS
// ======================

// Fonction avec paramètres typés
// action? → paramètre optionnel (peut être undefined)
function mutliply(num1: number, num2: number, action?: string) {
  if (action) {
    console.log(action); // exécuté seulement si action existe
  }
  return num1 * num2; // retourne un number
}

// La fonction retourne un number
console.log(mutliply(6, 10, "delete"));

// ======================
// TYPE "Function" (à éviter)
// ======================

// Function est très large :
// TypeScript ne vérifie ni les paramètres ni le retour
let foo: Function;

// Toute fonction est acceptée
foo = () => {};

// ======================
// SIGNATURE DE FONCTION
// ======================

// Définition précise d'une fonction :
// - 2 paramètres number
// - retourne un number
let baz: (a: number, b: number) => number;

// Fonction conforme à la signature
baz = (a, b) => a + b;

// ======================
// CALLBACKS
// ======================

// Une fonction qui reçoit une autre fonction en paramètre
// fn doit accepter une string et ne rien retourner (void)
function greetings(fn: (a: string) => void) {
  fn("hello");
}

// Fonction callback
function printToConsole(params: string) {
  console.log(params); // pas de return → void
}

// Passage de la fonction en callback
greetings(printToConsole);
