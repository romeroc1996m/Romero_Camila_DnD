// select your elements first - what is the user going to interact with?
// these are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element on the DOM

let navButtons = document.querySelectorAll('#buttonHolder img'), 
	theHeadline = document.querySelector('#headLine h1'),
	// collect the graggable pieces in the drag zone
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	// puzzlePieces1 = document.querySelectorAll('.puzzle-pieces1 img'),
	// collectt ALL of the drop zone elements
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector('a'),
	//dropElement = document.querySelector("#dropTarget"),
	// overlapThreshold = ('.puzzle-board'), 

	// set up a global variable to store a reference to the dragged piece
	// i need to know this lalter when i drop it on a zone
	draggPiece;


// functions go in the middle
// these are the "actions" that should happen

// this is a 1 to many connection to elements in the DOM
// the variable name is the "Basket"
function changeBGImage() {

	let newBGPath = "images/backGround" + this.id + ".jpg"; 

//url('../images/backGround0.jpg')
// debugger;
// object.property = new value
// change the backgorung image in the drop zone
// theHeadline.textContent = "Drag and Drop is fun!"

	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`; 
}

function handleStartDrag() { 
	//console.log('started draggin a piece!', this); 
	draggPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault();
	//console.log('dragging over me!');
	//e.dataTransfer.setData("text", ev.target.id);
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped on me!'); 
	e.target.appendChild(draggPiece);
	//e.dataTransfer.getData("text");
	


	// dropZones = this;
	
	// if(draggPiece = overlapThreshold){
	//	result = 'droppded on me!'}
	// e.target.appendChild(document.getElementById(draggPiece))
}


// event handling at the bottom => how things react when you 
// how is the user going to interact with the elements / controls you provide?
// process a collection of elements and add an event handler to each

navButtons.forEach(button => button.addEventListener('click', changeBGImage));

// add the drag start handler to all of the puzzles 

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
// add the dragover handling the 

dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) { // e is shorthand for event -> in this case the nav event
	//don't let the default behaviour of certain elements happen - block it
	e.preventDefault();
}

// temp handling
tempLink.addEventListener('click', blockDefaultBehaviour),

// dragging limit
dropElement.addEventListener("dragenter", (event) => {
	event.preventDefault();
  });
  
  dropElement.addEventListener("dragover", (event) => {
	event.preventDefault();
  });
