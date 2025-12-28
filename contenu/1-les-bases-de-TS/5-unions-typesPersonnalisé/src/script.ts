// ======================
// LES UNIONS
// ======================

// Une union permet d'accepter PLUSIEURS types pour une même variable

let code: string | number;

// OK : number autorisé
code = 6;

// OK : string autorisé
code = "string";

// ❌ code = true → erreur car boolean non autorisé

// Tableau contenant soit des boolean soit des number
let arr: (boolean | number)[];

// Chaque élément doit respecter l’union
arr = [true, false, 9999];

// Fonction acceptant string OU number
const foo = (param: string | number) => {
  console.log(param);
};

// Appels valides
foo(1111);
foo("babylone");

// ======================
// TYPES PERSONNALISÉS (TYPE ALIASES)
// ======================

// On crée un alias pour éviter de répéter "number | string"
type mixedNumberString = number | string;

// On réutilise le type personnalisé
const foo2 = (param: mixedNumberString) => {
  console.log(param);
};

// OK
foo2(122);
foo2("dzldkf");

// ❌ Erreur TypeScript : boolean non inclus dans le type
// foo2(true)

// ======================
// TYPES OBJETS PERSONNALISÉS
// ======================

// Définition d’un type pour un objet
type element = {
  x: number; // coordonnée X
  y: number; // coordonnée Y
  id: number | string; // id flexible (number ou string)
};

// L’objet DOIT respecter exactement la structure du type
const button: element = {
  x: 200,
  y: 9999,
  id: "uy987iuh987897",
};

console.log(button);
