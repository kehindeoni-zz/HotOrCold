$(document).ready(function() {



	    HotOrCold.init();

});

var HotOrCold = (function() {
		
	var that = {};

	that.init =function() {

		// Declaring of variables//

		$("#playgame").hide();
		var computerChoice = Math.floor(Math.random() * 100);
		var userChoice;
		var previousUserChoice = maxProgressBarHeight = 0;
		var $input = $("#userInput");


		//// To give different feedbacks depending on user's selections/////////

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

		// Validating user's input and give back an error if user enters a wrong input/////

		var validateInput =  function(input) {

			// when user's input is empty///
			if (input === "" || input === " ") {
				$("#error").text("invalid character");
				return false;

			} else {

				// when user input is less than 0 or greater than 0, return false///
				input = Number(input);	
				if ( input < 0 || input > 100) {
					$("#error").text("Please enter an integer between 1 and 100");
					return false;
				}


				// when user's input is not a number,return false///
				else if ( isNaN(input) ){
					$("#error").text("Not a number");
					return false;

				// else, if user enters the correct input, return true////
				} else {
					userChoice = input;
					$("#error").text("");
					return true;
				}
			}
		};


		// Process user's input  after validation and give appropriate feedbacks //////
		var processInput = function(){
			$inputValue = $input.val();
			if(validateInput($inputValue)){
				response();
				$("#progressbar").animate({ height: progressBarHeight() + "%" });
			}
		}


		// When the submit button is clicked, process user's input///
		$("#submit").click(function(){
			processInput();
		});

		// Allow user to use the enter key on the keyboard to submit input///
		$("#userInput").keypress(function(evt){
			if(evt.keyCode === 13){
				processInput();
			}
		});


		// Refreshes game when user clicks on a new game and everything returns go back to its initial conditions///

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


		// To set the progress bar with respect to the users input///

		var progressBarHeight = function(){
			var max = Math.max(Math.abs(100 - computerChoice), computerChoice);
			return maxProgressBarHeight = ((max - Math.abs(computerChoice - userChoice)) / max) * 100;
		}


		// perform actions///
		$("#start").click(function(){
			$("#rules").hide();
			$("#playgame").show();

		});

	}

	return that;
})();


