// ======================
// TYPES DE BASE
// ======================

// Type inféré : string
let str = "str";

// Type inféré : number
let num = 2;

// Type inféré : any[]
// Tableau vide → TypeScript ne peut pas deviner le type
let array = [];

// Type inféré : {}
// Objet vide → type très large et peu utile
let obj = {};

// Type inféré : boolean
let bool = true;

// ======================
// INFÉRENCE DE TYPE
// ======================

// Type inféré : any
// À éviter car on perd toute la sécurité TypeScript
let anything;

// OK, mais reste de type any
anything = 10;

// Déclaration explicite du type
let randomNumber: number;

// OK : uniquement des numbers sont autorisés
randomNumber = 3;

// ❌ randomNumber = "3" → erreur TypeScript

// ======================
// FONCTIONS & PARAMÈTRES
// ======================

// Le paramètre DOIT être typé
// Type de retour inféré : number
const conversion = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

// Appel valide
console.log(conversion(12));

// ❌ conversion("12") → erreur (string non autorisé)
