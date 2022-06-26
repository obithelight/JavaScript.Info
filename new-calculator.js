/*
Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:
*/

class Calculator{
    read(){
      this.numA = +prompt("Enter first number")
      this.numB = +prompt("Enter second number")
    }
    sum(){
      return this.numA + this.numB 
    }
    mul(){
      return this.numA * this.numB
    }
  }

 let calculator = new Calculator();
 calculator.read();