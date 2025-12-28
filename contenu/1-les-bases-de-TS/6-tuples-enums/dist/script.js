// ======================
// TUPLES
// ======================
// Un tuple est un tableau avec :
// - une longueur fixe
// - un type précis pour chaque position
let tuple; // tuple de 2 éléments : [booléen, nombre]
// Affectation correcte
tuple = [true, 2];
console.log(tuple); // affiche : [true, 2]
// ❌ Erreur TypeScript : trop d'éléments
// tuple = [true, 2, 33];
// ⚠️ Attention : push est autorisé par TypeScript
// même si ça casse la longueur du tuple
tuple.push(3);
console.log(tuple);
// Résultat : [true, 2, 3]
// → Limite des tuples : la longueur n’est pas strictement protégée à l’exécution
// ======================
// ENUMS
// ======================
// Un enum permet de définir un ensemble de valeurs nommées
// Ici, ce sont des enums numériques
var Roles;
(function (Roles) {
    Roles[Roles["JS"] = 0] = "JS";
    Roles[Roles["PHP"] = 1] = "PHP";
    Roles[Roles["RUST"] = 2] = "RUST";
})(Roles || (Roles = {}));
// Affiche l'objet généré par TypeScript
console.log(Roles);
export {};
// Résultat :
// {
//   0: 'JS',
//   1: 'PHP',
//   2: 'RUST',
//   JS: 0,
//   PHP: 1,
//   RUST: 2
// }
// TypeScript crée un double mapping :
// - nom → valeur : Roles.JS === 0
// - valeur → nom : Roles[0] === 'JS'
//# sourceMappingURL=script.js.map