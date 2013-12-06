var cards_clicked = [];
var cards_shown = [];

$(".card").click(function(event) {
	var card_color = $(this).css("background-color");

	//if(card_color == "rgb(255, 0, 0)") {
		$(this).animate({backgroundColor: "blue"}, "slow");
		
		card_clicked = $(this).attr("id");
		console.log(card_clicked);

		cards_clicked.push($(card_clicked));

    	console.log(cards_clicked.length);
    	console.log(cards_shown.length);
    	console.log(cards_shown);

    	if (cards_clicked.length == cards_shown.length) {
    		if (cards_clicked.sort == cards_shown.sort) {
    			console.log("You did it!");
    		}
    		else {
    			console.log("Try again");
    		}
    	}

	//}
	//else {
		//$(this).animate({backgroundColor: "red"}, "slow");
	//}
});



$("#start_button").click(function(event) {
	var card_ids = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24", "card25"];
	shuffle(card_ids);
	console.log(card_ids);
	
	cards_shown = card_ids.slice(0,5);
	console.log(cards_shown);
	
	//$(this).fadeOut("slow"); //Need a placeholder or alternative method to prevent displacing other elements

	$.each(cards_shown, function(index, value) {
		$("#"+value).animate({backgroundColor: "blue"}, "slow").delay(3000);
		$("#"+value).animate({backgroundColor: "red"}, "slow");
	});

});


//"Try to remember which squares change color."
//"Try to reproduce the same pattern."

//Create a function for randomizing which cards to flip

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}