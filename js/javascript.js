$(document).ready(function() {

    HotOrCold.init();

});

var HotOrCold = (function() {
	
	var that = {};

	that.init =function() {

		$("#playgame").hide();
	var computerChoice = Math.floor(Math.random() * 100);
	var userChoice;
	var previousUserChoice = maxProgressBarHeight = 0;
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
			$("#progressbar").animate({ height: progressBarHeight() + "%" });
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
		$input.val("");
		$("#error").text("");
		$("#progressbar").animate({ height: "0%" });
	}

	$("#newgame").click(function(){
		resetGame();
	});


	var progressBarHeight = function(){
		var max = Math.max(Math.abs(100 - computerChoice), computerChoice);
		return maxProgressBarHeight = ((max - Math.abs(computerChoice - userChoice)) / max) * 100;
	}

	$("#start").click(function(){
		$("#rules").hide();
		$("#playgame").show();

	});

	}

	return that;
})();


// $(document).ready(function(){

// 	$("#playgame").hide();
// 	var computerChoice = Math.floor(Math.random() * 100);
// 	var userChoice;
// 	var previousUserChoice = maxProgressBarHeight = 0;
// 	var $input = $("#userInput");



// 	var response = function(){
// 		var previousDiff = Math.abs(computerChoice - previousUserChoice);
// 		var presentDiff = Math.abs(computerChoice - userChoice);

// 		console.log(previousUserChoice);
// 		if ( previousUserChoice === 0 ) {
// 			$("#feedback").text("You are hot");
// 		} else if ( computerChoice === userChoice) {
// 			$("#feedback").text("Yaay! you guessed right");
// 		} else if ( previousDiff >  presentDiff) {
// 			$("#feedback").text("You are closer");
// 		} else if  ( previousDiff < presentDiff) {
// 			$("#feedback").text("You are farther");
// 		} else if ( previousDiff  === presentDiff ) {
// 			$("#feedback").text("Neither closer nor farther");
// 		}
// 		previousUserChoice = userChoice;
// 	};



// 	var validateInput =  function(input) {
// 		if (input === "" || input === " ") {
// 			$("#error").text("invalid character");
// 			return false;
// 		} else {
// 			input = Number(input);
// 			if ( input < 0 || input > 100) {
// 				$("#error").text("Please enter an integer between 1 and 100");
// 				return false;
// 			}

// 			else if ( isNaN(input) ){
// 				$("#error").text("Not a number");
// 				return false;
// 			} else {
// 				userChoice = input;
// 				$("#error").text("");
// 				return true;
// 			}
// 		}
// 	};



// 	var processInput = function(){
// 		$inputValue = $input.val();
// 		if(validateInput($inputValue)){
// 			response();
// 			$("#progressbar").animate({ height: progressBarHeight() + "%" });
// 		}
// 	}


// 	$("#submit").click(function(){
// 		processInput();
// 	});

// 	$("#userInput").keypress(function(evt){
// 		if(evt.keyCode === 13){
// 			processInput();
// 		}
// 	});


// 	var resetGame = function(){
// 		computerChoice = Math.floor(Math.random() * 100);
// 		previousUserChoice = 0;
// 		$input.val("");
// 		$("#error").text("");
// 		$("#progressbar").animate({ height: "0%" });
// 	}

// 	$("#newgame").click(function(){
// 		resetGame();
// 	});


// 	var progressBarHeight = function(){
// 		var max = Math.max(Math.abs(100 - computerChoice), computerChoice);
// 		return maxProgressBarHeight = ((max - Math.abs(computerChoice - userChoice)) / max) * 100;
// 	}

// 	$("#start").click(function(){
// 		$("#rules").hide();
// 		$("#playgame").show();

// 	});


// });