// Tuples tableau avec longueur defini  + types defini pour chaque element

let tuple: [boolean, number]; // longueur de 2 défini

tuple = [true, 2];

console.log(tuple);
// tuple = [true, 2, 33];  ici ne fonctionne pas car 3 elements
tuple.push(3); //
console.log(tuple); // par contre probleme avec push le nbre d'element du tuple va changer

//Enum
// const Roles = {
//   JS: 1,
//   PHP: 2,
//   RUST: 3,
// };

enum Roles {
  JS,
  PHP,
  RUST,
}

console.log(Roles);
