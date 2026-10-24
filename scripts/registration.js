const pet1 = {
    name: "Max",
    age: 5,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
};

function displayPet(pet) {
    let row = document.createElement("tr");

    for (let value of [pet.name, pet.age, pet.breed, pet.gender, pet.service]) {
        let cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    }

    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        if (confirm("Delete this pet's registration?")) {
            row.remove();
        }
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    document.getElementById("petList").appendChild(row);
}

function registerPet(event) {
    event.preventDefault();

    let newPet = {
        name: document.getElementById("petName").value.trim(),
        age: document.getElementById("petAge").value,
        breed: document.getElementById("petBreed").value.trim(),
        gender: document.getElementById("petGender").value,
        service: document.getElementById("petService").value
    };

    displayPet(newPet);
    event.target.reset();
}

displayPet(pet1);
