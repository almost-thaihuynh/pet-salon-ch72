$("#registerService").click(function(){

    event.preventDefault();
    //alert("Clicked!")
    //1. Get the Values -> .val();
    // Get the input fields values using jquery -> $("") -> val
let productService = $("#serviceName").val().trim();
let productDescription = $("#serviceDescription").val().trim();
let productPrice = $("#servicePrice").val();

//alert(`${productService} - ${productDescription} - ${productPrice}`);

    //2. Use the values
if(productService == ""){
    $("#serviceName").css("border","1px solid red");
} else if(productDescription == ""){
    $("#serviceDescription").css("border","1px solid red");
    //alert("Empty");
} else if(productPrice == ""){
    $("#servicePrice").css("border","1px solid red");
    //alert("Empty");
} else {
    $("#serviceName").css("border", "")
    $("#serviceDescription").css("border", "")
    $("#servicePrice").css("border", "")
    //remove red border

    //c;ear input field
    $("#serviceName").val("");
    $("#serviceDescription").val("");
    $("#servicePrice").val("");


    alert("Services Registered");
    // Save to local storage -> TBD -> Assignment 3
}
});