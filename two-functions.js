/*
Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?
*/

let obj = {};

function A() {
  return obj;
}