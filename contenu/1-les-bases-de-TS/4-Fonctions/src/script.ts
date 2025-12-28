function mutliply(num1: number, num2: number, action?: string) {
  if (action) {
    console.log(action);
  }
  return num1 * num2;
}
//void (la fonction n'a pas de return)
console.log(mutliply(6, 10, "delete"));

let foo: Function;

foo = () => {};

// Function signature
let baz: (a: number, b: number) => number;
baz = (a, b) => a + b;

//Callbacks functions
function greetings(fn: (a: string) => void) {
  fn("hello");
}

function printToConsole(params: string) {
  console.log(params);
}
greetings(printToConsole);
