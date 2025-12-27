let str = "str";
let num = 2;
let array = [];
let obj = {};
let bool = true;

// les types sont inferrés

let anything;
anything = 10;
let randomNumber: number;
randomNumber = 3;

// il faut donner un type au parametre

const conversion = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

console.log(conversion(12));
