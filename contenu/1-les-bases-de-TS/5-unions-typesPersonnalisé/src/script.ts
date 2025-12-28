// -----------  LES UNIONS

let code: string | number;
code = 6;
code = "string";

let arr: (boolean | number)[];
arr = [true, false, 9999];

const foo = (param: string | number) => {
  console.log(param);
};

foo(1111);
foo("babylone");

// ------------- LES TYPES PERSONNALISE. ou TYPES ALIASES

type mixedNumberString = number | string;

const foo2 = (param: mixedNumberString){
  console.log(param)
}

foo2(122)
foo2("dzldkf")
// foo2(true)    ----> souligné en rouge car il n'est pas dans le type personnalisé


type element = {
  x: number;
  y: number;
  id: number | string;
}

const button : element ={
  x: 200,
  y: 9999,
  id: "uy987iuh987897"
} 

console.log(button);
