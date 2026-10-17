// Arrays are an ordered/listed set of items that begin with [0]. Used for creating loops
// index/position [0]
// {} object
// [] array

// 1. Define the array

let namesList = ["Fernanda", "Thai", "John", "Ryan", "Shanee", "Kydani"];
let gradesList = [8,7,6,5,4,3];

// 2. Access to an item -> index
// arrayName[index] -> namesList[0] -> Fernanda
console.log(namesList[0])
console.log(namesList[1])

// 3. Travel the array -> for loop
for(let i=0;i<6;i++){// or namesList.length for full thing
    console.log(namesList[i]);
}

// ==== Array of Object ====
let studentList = [
    {
        name: "Thai",
        age: 40
    },
    {
        name: "Steve",
        age: 34
    },
    {
        name: "Dude",
        age: 30
    }
];
// Console Log the first Student Name
console.log(studentList[0].name);


// Console log the third student age
console.log(studentList[2].age);

// Print this sentence with first student's information
// Hey, this is _______ and I am ______ years old.

console.log(`Hey, this is ${studentList[0].name} and I am ${studentList[0].age} years old.`)

// ==== EXERCISE ====
// Create an array called gamesList with 3 game objects.
// Each object should have title, platform, and release year.
// Print the first game's title.
// Print the second game's platform. //switch, PC, etc.
// Print the third game's title, platform, and release year in single sentence.
// Print the total number of games.


let gamesList = [
    {
        title: "Super Mario Odyssey",
        platform: "Nintendo Switch",
        released: 2017,

    },
    {
        title: "Monster Hunter: World",
        platform: "Playstation",
        released: 2010,

    },
    {
        title: "Phasmaphobia",
        platform: "Windows (PC)",
        released: 2020

    }
    
];
console.log(gamesList[0].title);
console.log(gamesList[1].platform);
console.log(`Title: ${gamesList[2].title}\nPlatform: ${gamesList[2].platform}\nReleased: ${gamesList[2].released}`);
console.log(gamesList.length);

