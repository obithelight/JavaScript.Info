/*
Sum object properties
We have an object storing salaries of our team:


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
*/

//Solution 

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

//Modify salary key-value pairs
salaries.Obi = 610
salaries.Ann = 100
delete salaries.Pete
//salaries = {}

//Write the code to sum all salaries and store in the variable sum.
let sum = 0
for(let key in salaries){
  sum += salaries[key]
}
console.log(sum)
//If salaries is empty, then the result must be 0.
