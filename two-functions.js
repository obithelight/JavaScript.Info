/*
Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?
*/

let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();
let b = new B();
