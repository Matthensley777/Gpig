
 var pig = document.getElementById("guinea-pig");
 var color = document.getElementById("add-color");
 var large = document.getElementById("make-large");
 var border = document.getElementById("add-border");
 var rounding = document.getElementById("add-rounding");

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

color.addEventListener("click", changeToBlue);

function changeToBlue() {
    pig.classList.add("addcolor");
}

large.addEventListener("click", makeLarge);

function makeLarge() {
    pig.classList.add("large");
}

border.addEventListener("click", addBorder);

function addBorder() {
    pig.classList.add("border");
}

rounding.addEventListener("click", roundBorder);

function roundBorder() {
    pig.classList.add("rounding");
}

var outputField = document.getElementById("keypress-input");
var domDiv = document.getElementById("output-target");

outputField.addEventListener("keyup", outputText);

function outputText() {
	var txt = "";
	txt = outputField.value;
	domDiv.innerHTML = txt;

}


















