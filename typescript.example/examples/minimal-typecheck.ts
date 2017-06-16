var a;

function f(x: string) {
  return x;
}

f(a);

interface X {}

const b: X = a;
//const c: any = b;
var c: string = undefined;
//const b: A = { foo: 5 }
//const c: A = 512