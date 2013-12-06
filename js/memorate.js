$(".card").click(function(event) {
	var card_color = $(this).css("background-color");

	if(card_color == "rgb(255, 0, 0)") {
		$(this).css("background-color", "blue");
		//card_clicked = $(this).css("id");
		//console.log(card_clicked);
	}
	else {
		$(this).css("background-color", "red");	
	}
});

$("#start_button").click(function(event) {
	var card_ids = ["#card1", "#card2", "#card3", "#card4", "#card5", "#card6", "#card7", "#card8", "#card9", "#card10", "#card11", "#card12", "#card13", "#card14", "#card15", "#card16", "#card17", "#card18", "#card19", "#card20", "#card21", "#card22", "#card23", "#card24", "#card25"];
	shuffle(card_ids);
	console.log(card_ids);
	
	var cards_to_flip = card_ids.slice(0,5);
	console.log(cards_to_flip);
	
	$.each(cards_to_flip, function(index, value) {
		$(value).animate({backgroundColor: "blue"}, "slow");

	});

});


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