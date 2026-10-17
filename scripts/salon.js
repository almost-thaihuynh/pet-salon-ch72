function Salon(nameValue, openValue, closeValue, phoneValue, streetValue, cityValue, stateValue, zipValue){
    this.name = nameValue;
    this.hours = {
        open: openValue,
        close: closeValue
    };
    this.phone = phoneValue;
    this.address = {
        street: streetValue,
        city: cityValue,
        state: stateValue,
        zip: zipValue
    };
};

let salon = new Salon(
    "This Guys Pet Salon",
    "9:00 AM",
    "6:00 PM",
    "111-222-3333",
    "123 Main Street",
    "San Diego",
    "CA",
    "12345"
);

function displaySalonInfo(){
    document.getElementById("salonInfo").innerHTML =
    `Welcome to ${salon.name}! We are located at ${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip}. Our hours of operation are from ${salon.hours.open} to ${salon.hours.close}. You can contact us at ${salon.phone}.`;
};

displaySalonInfo();