const pet1 = {
    name: "Max",
    age: 5,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
};

const pet2 = {
    name: "Luna",
    age: 3,
    gender: "Female",
    service: "Nail Trim",
    breed: "Husky"
};

const pet3 = {
    name: "Milo",
    age: 2,
    gender: "Male",
    service: "Bath",
    breed: "Beagle"
};


function pets() {

    let petNames = `<ol>
        <li>${pet1.name}</li>
        <li>${pet2.name}</li>
        <li>${pet3.name}</li>
    </ol>`;
    
    document.getElementById("petList").innerHTML = petNames;
};


pets();