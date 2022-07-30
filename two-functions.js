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

console.log(a == b); // true

//Two different objects, even when empty are NOT equal. 
let obj1 = {};
let obj2 = {};

function X() {
  return obj1;
}

function Y() {
  return obj2;
}

let x = new X();
let y = new Y();

console.log(x == y); // false