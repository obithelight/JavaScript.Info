/*
Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/

let calculator = {
  read() {
    this.numA = +prompt("Enter the first number");
    this.numB = +prompt("Enter the second number");
  },

  sum() {
    return this.numA + this.numB;
  },

  mul() {
    return this.numA * this.numB;
  }
};

