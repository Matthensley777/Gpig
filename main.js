// *When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// *When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// *When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// *When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// *The first section's text should be bold.
// *The last section's text should be bold and italicized.
// *Make the buttons stop appearing next to each other as inline elements. Change them into block elements.




document.getElementById("page-title").addEventListener("mouseover", myFunction);

function myFunction() {
    document.getElementById("page-title").innerHTML = "You moved your mouse over the header";
}
document.getElementById("page-title").addEventListener("mouseleave", mouseLeave);

function mouseLeave() {
    document.getElementById("page-title").innerHTML = "You left me!...jerk!";
}

document.getElementById("section").addEventListener("click", mouseClick);

function mouseClick() {
    document.getElementById("section").innerHTML = "you clicked on section1";
}

document.getElementById("add-color").addEventListener("click", changeToBlue);

function changeToBlue() {
    document.getElementById("guinea-pig").style.color = "blue";
}

document.getElementById("make-large").addEventListener("click", makeLarge);

function makeLarge() {
    document.getElementById("guinea-pig").style.fontSize = "30px";
}

document.getElementById("add-border").addEventListener("click", addBorder);

function addBorder() {
    document.getElementById("guinea-pig").style.border = "thin solid black";
}

document.getElementById("add-rounding").addEventListener("click", roundBorder);

function roundBorder() {
    document.getElementById("guinea-pig").style.borderRadius = "25px";
}

var outputField = document.getElementById("keypress-input");
var domDiv = document.getElementById("output-target");

outputField.addEventListener("keypress", outputText);

function outputText() {
	var txt = "";
	txt = outputField.value;
	domDiv.innerHTML = txt;

}


















