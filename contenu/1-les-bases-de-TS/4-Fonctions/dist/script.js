function mutliply(num1, num2, action) {
    if (action) {
        console.log(action);
    }
    return num1 * num2;
}
//void (la fonction n'a pas de return)
console.log(mutliply(6, 10, "delete"));
let foo;
foo = () => { };
// Function signature
let baz;
baz = (a, b) => a + b;
//Callbacks functions
function greetings(fn) {
    fn("hello");
}
function printToConsole(params) {
    console.log(params);
}
greetings(printToConsole);
export {};
//# sourceMappingURL=script.js.map