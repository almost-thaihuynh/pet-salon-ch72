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

// ==== Object Constructor ====

function Student(nameValue, ageValue, isStudentValue){
    this.name = nameValue;
    this.age = ageValue;
    this.isStudent = isStudentValue;
};

let student = new Student("Fernanda", 34, false);
console.log(student.name);
console.log(student.age);
console.log(student.isStudent);
console.log(`Student: ${student.isStudent}\nAge:${student.age}`);

// Products

function Products(name,price){
    this.name = name;
    this.price = price;
}

let prod = new Products("Apple", 10);
console.log(`The product is ${prod.name}, and the price is ${prod.price}.`)