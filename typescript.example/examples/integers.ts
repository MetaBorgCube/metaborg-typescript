const a = 3;
const b = 3;
const c = 5;
const d = "asdf";
const e = true;
const f = false;
const g = c;
const g = b;

interface foo {
  bar: {
    foo: string,
  };
}

interface A {
  next?: B
}
interface B {
  next?: A
};
// A == B?

const number = 5;

function foo(a: number, b: string): number {
  return a;
}

const a = foo;

//function bar() {
//  return function() {
//    return function(a: number) {
//
//    }
//  }
//}

//bar()()(5)

const h = foo(5, "asdf");
