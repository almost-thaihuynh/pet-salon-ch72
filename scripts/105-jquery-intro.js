// Javascript -> VAnilla
function sayHello(){
    alert("Hola!");
}

// jQuery Approach
// select            .action
$("#triggerEventBtn").click(function(){
    alert("Hola!")
});
$("#hideP").click(function(){
    $("p").hide();
//    alert("Hide!")
});
$("#showP").click(function(){
        $("p").show();
//    alert("Show!")
});
$("#toggleP").click(function(){
        $("p").toggle();
//    alert("Toggle!")
});

// innerHTML -> html
// textContent -> text
$("#changeText").click(function(){
        $("p").html("<i> Hello class! This is the new text.</i>");
//    alert("Change!")
});
$("#applyCss").click(function(){
    $("p")
    .css("color", "red")
    .css("border", "1px solid red")
    .css("padding", "10px");
//    alert("CSS!")
});
$("#applyClass").click(function(){
    $("p").addClass("my-class");
//    alert("CSS Class!")
});
