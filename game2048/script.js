var board = new Array();
var win = false;

function getNumberCellBgColor(number) {    
    switch(number) {
        case 2: 
            return "#eee4da";
        case 4: 
            return "#ede0c8";
        case 8: 
            return "#f2b179";
        case 16: 
            return "#f59563";
        case 32: 
            return "#f67c5f";
        case 64: 
            return "#ec6544";
        case 128: 
            return "#e44d29";
        case 256: 
            return "#edcf72";
        case 512: 
            return "#c8a145";
        case 1024: 
            return "#a8832b";
        case 2048: 
            return "#86aa9c";
        case 4096: 
            return "#a6c";
        case 8192: 
            return "#791e6f";
    }    
	return "black";	
}

$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37:
            moveLeft();
            break;
        case 37:
            moveUp();
            break;
        case 37:
            moveRight();
            break;
        case 37:
            moveDown();
            break;
    }
});

$(document).ready(function() {
	init();
	generateOneNumber();
	generateOneNumber();
});

function init() {
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var gridCell = $("#grid-cell-" + i + "-" + j);
			gridCell.css("top", getPosTop(i, j));
			gridCell.css("left", getPosLeft(i, j));
		}
	}
	for(var i = 0; i < 4; i++){
		board[i] = new Array();
		for(var j = 0; j < 4; j++){
			board[i][j] = 0;
		}
    }
}

function generateOneNumber() {
	if(nospace(board)) {
		return false;
    }
    
	var randomX = parseInt(Math.floor(Math.random() * 4));
	var randomY = parseInt(Math.floor(Math.random() * 4));
	
	while(true) {
		if(board[randomX][randomY] == 0){
			break;
		}
		var randomX = parseInt(Math.floor(Math.random() * 4));
		var randomY = parseInt(Math.floor(Math.random() * 4));
	}

	var randomNumber = Math.random() < 0.5 ? 2 : 4;

	board[randomX][randomY] = randomNumber;
	
	return true;
}