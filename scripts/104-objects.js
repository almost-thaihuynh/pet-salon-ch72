// Primitive / Basic
let name = "Thai";
let age = 40;
let isStudent = false;

let name2 = "John";
let age2 = 34;
let isStudent2 = true;

// Non-Primitive / Advance (Complex)
// Object Literal
let student1 = {
    name: "Thai",
    age: 40,
    isStudent: false
};

// 1. Access to the values -> .
// objectName.property
student1.age

console.log(student1.age);
console.log(student1.name);
console.log(student1.isStudent);

// Exercise
let student2 = {
    name: "SHTEEEVAN",
    age: 19,
    isStudent: true
};
let student3 = {
    name: "That one guy...",
    age: 99,
    isStudent: false
};

console.log(student3)
console.log(student3.isStudent)
console.log(student2.age)


// New Concept: Interpolation
console.log(`Hello my name is ${student3.name} and I am ${student3.age} years old.`)

let p = document.getElementById("paragraph");
p.innerHTML = `Hello my name is ${student2.name} and I am ${student2.age} years old.`;