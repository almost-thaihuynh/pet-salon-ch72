function Product(nameValue, priceValue, categoryValue){
    this.name = nameValue;
    this.price = priceValue;
    this.category = categoryValue;
};

function registerProduct(event){
    // To prevent browser from being refreshed
    event.preventDefault();
    //alert("Test");
    // 1. Get the input field values
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    console.log(`Name: ${productName} -  Price ${productPrice} - Category ${productCategory}`);

    // 2. Use the values   
    // 2.1 Create the Object
    let newProduct = new Product(productName,productPrice,productCategory);
    // test console.log(newProduct)

    // 2.2 Display the product in the table
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${newProduct.name}</td>
    <td>${newProduct.price}</td>
    <td>${newProduct.category}</td>
    <td><button id="" class="btn btn-danger delete-btn">Delete</button></td>
    `;

    let body = document.getElementById("body");
    body.appendChild(row);

    // Delete functionality
    row.querySelector(".delete-btn").addEventListener("click",function(){    
    // test alert("Deleted");

    let confirmation = confirm("Fiinnneeee...");
    
    if(confirmation){
        row.remove();
    }

});

    // Clear fields
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}


