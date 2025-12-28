// SURVOLE LES CONSTANTES POUR COMPRENDRE LES TYPES
// TypeScript déduit automatiquement les types (inférence)

// ======================
// ARRAYS (TABLEAUX)
// ======================

// Tableau de strings
const fruits = ["fraise", "pomme"];
// Type déduit : string[]

// ❌ Erreur : on ne peut pas ajouter un number
// fruits.push(5);

// Tableau mixte (union déduite automatiquement)
const mixedArray = [12, "spaceX", [1, 2, 3]];
// Type déduit : (number | string | number[])[]

mixedArray.push([1, 2, 3]); // OK : tableau de numbers

// ❌ Erreur : le tableau interne doit être number[]
// mixedArray.push([1, 2, "3"]);

// Déclaration du type SANS initialisation
let nums: number[];
// À ce stade : nums === undefined

// ❌ Impossible d'utiliser push car nums n'est pas encore un tableau
// nums.push(1);

nums = [1, 4]; // maintenant nums est bien un tableau de numbers

// Déclaration + initialisation
let nums2: number[] = [];
// Ici nums2 est directement un tableau vide

nums2.push(2, 3, 5); // OK
console.log(nums2);

// Tableau avec le type any (à éviter si possible)
let random: any[] = [];

// ❌ Même avec any, la variable reste un tableau
// random = true;

random.push(1, "hola", [1, 2, "ez"]); // tout est accepté
console.log(random);

// ======================
// OBJECTS (OBJETS)
// ======================

// Type de l'objet déduit automatiquement
const user = {
  name: "papi",
  age: 12,
};

// ❌ Erreur : name doit rester une string
// user.name = 333;

// Déclaration du type d'un objet (sans valeur)
let profile: {
  name: string;
  age: number;
};

// L'objet doit respecter EXACTEMENT la structure
profile = {
  name: "jonh",
  age: 12,
};

// Déclaration d'un objet avec un type inline (moins lisible)
// → on préfère en général les interfaces ou types
let user3: {
  name: string;
  age: number;
  favFood: string[];
  data: any;
} = {
  name: "joe",
  age: 43,
  favFood: ["pasta", "cheese"],
  data: 23,
};

// Type object (très générique)
let obj: object;

// OK : n'importe quel objet
obj = { name: "merci", mesure: 199 };
