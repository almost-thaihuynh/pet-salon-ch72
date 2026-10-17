function update(){
    // testing the button and fuction connection
    // alert("Clicked!");

    // 1. GEt the paragraphs by class -> getElementsByClassName
let paragraphs = document.getElementsByClassName("text");
console.log(paragraphs);

    // Access to paragrapgh 1 change text color to red.
    // ASK GOOGLE: JS change text color
    paragraphs[0].style.color = "#b412";
    paragraphs[1].style.color = "#de1112";

    // 2. Update the H2 text
    let title = document.getElementById("title");
    // innerHTML or textContent
    // Reference: title.innerHTML = "<i> New Text </i>";
}


function add(){
    // 1. Get the input value
    let text = document.getElementById("text").value;
    console.log(text);

    // 2. Display the value in the list
    let list = document.getElementById("list");
    list.innerHTML += `
    <li>  ${text} </li>
    `;

    document.getElementById("text").value = "";
}