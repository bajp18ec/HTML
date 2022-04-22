// primitive data types
let name = 'Basvaraju';
var age=22;
let isApproved = true;
let firstname = undefined;
let lastName = null;

console.log(typeof(age))

var age = "twenty"

console.log(typeof(age))
console.log(typeof(isApproved))

// Refrence types

const person = 
{
    name:"Basavaraju",
    age:22,
    place:"Arsikere",
}
//dot notation
person.name = "Raj";
// Bracket notation
person['name'] = 'Lavanya';

console.log(person)

// Arrays

let selectedColors = ['red','blue'];

selectedColors[2] = 'Orange'
console.log(selectedColors);// type of Array is object

// functions

function greet(name)
{
    console.log("Hello world "+name);
}
greet("Basvarju");

// types of functions
// calculating value

function square(number)
{
    return number *number;
}

console.log(square(5));