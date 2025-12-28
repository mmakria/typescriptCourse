//SURVOLE LES CONSTANTES POUR COMPRENDRE LES TYPES

// ----------- ARRAY -----------------
const fruits = ["fraise", "pomme"];

// fruits.push(5) -> ne fonctionne pas car le type est dedui en string

const mixedArray = [12, "spaceX", [1, 2, 3]];
mixedArray.push([1, 2, 3]);
// mixedArray.push([1, 2, "3"]); -> ne foncitonne pas car declarer tableau de nombre initialement

let nums: number[]; // j'attends un tableau de nombres. --- mais la variable reste undefiened
// nums.push(1) ne fonctionne pas car je n'ai pas declaré de tableau. Nums est toujours undiefiend
nums = [1, 4];

let nums2: number[] = []; // ici je declare son type et je l'instancie aussi
nums2.push(2, 3, 5);
console.log(nums2);

let random: any[] = []; // je fais déclare un tableau qui acceuil tout
// random = true; ----> ne fonctionn pas car meme si c'est any, la variables attends quands meme un tableau de base
random.push(1, "hola", [1, 2, "ez"]);
console.log(random);

// ----------- OBJECTS -----------------
const user = {
  name: "papi",
  age: 12,
};

// user.name = 333. Erreur car l'objet attends un string

let profile: {
  name: string;
  age: number;
};

profile = {
  name: "jonh",
  age: 12,
}; // je dois mettre tous l'objet

//une autre manière de declarer un peu moins utilisé pas très lisible --- on peut utiliser à la place les interfaces et les types personnalisés
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

let obj: object;

obj = { name: "merci", mesure: 199 };
