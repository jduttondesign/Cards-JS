/*
create card - function
dynamically set event listener on this card (delete btn)
add to the DOM - the card that was created
create function to removeCard(){};

*/

var createCard = document.getElementById("create");
var userInput = document.getElementById("input");
var outputDiv = document.getElementById("output");

console.log(outputDiv);

function makeCard(){ 
	var userInputString = userInput.value;
	var cardString = "";
	cardString += '<div class="card">';
		cardString += '<p class="pTag">' + userInputString + '</p>'
		cardString += '<button class="delete">delete</button>'
	cardString += '</div>'
	outputDiv.innerHTML += cardString;
	userInput.value = "";
}

function removeCard(e){
	console.log("removeCard");
	console.log("event.target", e.target.className);
	if (e.target.className === "delete") {
		console.log("deletebtn"); //this shows the delete btn works when clicked
		//removeCard from DOM 
		e.target.parentNode.className = "";
		e.target.parentNode.innerHTML = "";
	}

}
//event.target delete
createCard.addEventListener("click", makeCard);
outputDiv.addEventListener("click", removeCard);


// function enterKeyPushed(keypress){
//  if (keypress.which === 13){
//  	createCard();
//  	inputText.value = "";
//  }
// }



