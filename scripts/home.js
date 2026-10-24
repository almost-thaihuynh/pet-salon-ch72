// Change the picture when the Before or After button is clicked.
function showBefore() {
    document.getElementById("makeoverPhoto").src = "images/before.png";
    document.getElementById("makeoverPhoto").alt = "Apricot poodle before grooming";
    document.getElementById("makeoverLabel").textContent = "BEFORE THE PAMPER";
    document.getElementById("beforeButton").setAttribute("aria-pressed", "true");
    document.getElementById("afterButton").setAttribute("aria-pressed", "false");
}

function showAfter() {
    document.getElementById("makeoverPhoto").src = "images/after.png";
    document.getElementById("makeoverPhoto").alt = "Apricot poodle after grooming";
    document.getElementById("makeoverLabel").textContent = "AFTER THE PAMPER";
    document.getElementById("beforeButton").setAttribute("aria-pressed", "false");
    document.getElementById("afterButton").setAttribute("aria-pressed", "true");
}

// The HTML buttons pass in the picture path and description.
function showPhoto(imagePath, description) {
    document.getElementById("dialogPhoto").src = imagePath;
    document.getElementById("dialogPhoto").alt = description;
    document.getElementById("dialogCaption").textContent = description;
    document.getElementById("photoDialog").showModal();
}

function closePhoto() {
    document.getElementById("photoDialog").close();
}
