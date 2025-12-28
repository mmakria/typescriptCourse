//SURVOLE LES CONSTANTES POUR COMPRENDRE LES TYPES
const fruits = ["fraise", "pomme"];
// fruits.push(5) -> ne fonctionne pas car le type est dedui en string
const mixedArray = [12, "spaceX", [1, 2, 3]];
mixedArray.push([1, 2, 3]);
// mixedArray.push([1, 2, "3"]); -> ne foncitonne pas car declarer tableau de nombre initialement
let nums; // j'attends un tableau de nombres. --- mais la variable reste undefiened
// nums.push(1) ne fonctionne pas car je n'ai pas declaré de tableau. Nums est toujours undiefiend
nums = [1, 4];
let nums2 = []; // ici je declare son type et je l'instancie aussi
nums2.push(2, 3, 5);
console.log(nums2);
let random = []; // je fais déclare un tableau qui acceuil tout
// random = true; ----> ne fonctionn pas car meme si c'est any, la variables attends quands meme un tableau de base
random.push(1, "hola", [1, 2, "ez"]);
console.log(random);
export {};
//# sourceMappingURL=script.js.map