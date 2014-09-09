$(document).ready(function(){


	var computerChoice = Math.floor(Math.random() * 100);
	var userChoice;
	var previousUserChoice = 0;
	var $input = $("#userInput");

	var response = function(){
		var previousDiff = Math.abs(computerChoice - previousUserChoice);
		var presentDiff = Math.abs(computerChoice - userChoice);

		console.log(previousUserChoice);
		if ( previousUserChoice === 0 ) {
			$("#feedback").text("You are hot");
		} else if ( computerChoice === userChoice) {
			$("#feedback").text("Yaay! you guessed right");
		} else if ( previousDiff >  presentDiff) {
			$("#feedback").text("You are closer");
		} else if  ( previousDiff < presentDiff) {
			$("#feedback").text("You are farther");
		} else if ( previousDiff  === presentDiff ) {
			$("#feedback").text("Neither closer nor farther");
		}
		previousUserChoice = userChoice;
	};


	var validateInput =  function(input) {
		if (input === "" || input === " ") {
			$("#error").text("invalid character");
			return false;
		} else {
			input = Number(input);
			if ( input < 0 || input > 100) {
				$("#error").text("Please enter an integer between 1 and 100");
				return false;
			}

			else if ( isNaN(input) ){
				$("#error").text("Not a number");
				return false;
			} else {
				userChoice = input;
				$("#error").text("");
				return true;
			}
		}
	};

	var processInput = function(){
		$inputValue = $input.val();
		if(validateInput($inputValue)){
			response();
		}
	}

	$("#submit").click(function(){
		processInput();
	});

	$("#userInput").keypress(function(evt){
		if(evt.keyCode === 13){
			processInput();
		}
	});

	var resetGame = function(){
		computerChoice = Math.floor(Math.random() * 100);
		previousUserChoice = 0;
	}

	$("#newgame").click(function(){
		resetGame();	
	});

});