// select your elements first - what is the user going to interact with?
// these are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element on the DOM

let navButtons = document.querySelectorAll('#buttonHolder img'), 
	theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('#puzzle-board');


// functions go in the middle
// these are the "actions" that should happen

// this is a 1 to many connection to elements in the DOM
// the variable name is the "Basket"
function changeBGImage() {
debugger;
// object.property = new value

// change the backgorung image in the drop zone

// theHeadline.textContent = "Drag and Drop is fun!"

puzzleBoard.style.backgroundImage = 'url("../"images/backGround" + this.id + ".jpg")' ;
}

// event handling at the bottom => how things react when you 
// how is the user going to interact with the elements / controls you provide?
// process a collection of elements and add an event handler to each

navButtons.forEach(button => button.addEventListener('click', changeBGImage));