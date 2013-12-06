var cards_clicked = [];
var cards_shown = [];

$(".instructions").hide();


//Start button triggers random flipping of cards and instructions
$(".button").click(function(event) {
	
	//Clear old values and instructions
	cards_clicked = [];
	$(".card").css("background-color", "#FF8000");
	$(".instructions").fadeOut("slow");

	//Retire start button
	$("#start_button").attr("disabled", true);
	$("#start_button").fadeOut("slow");
	
	//Display instructions
	$("#instructions1").delay(800).fadeIn("slow").delay(4000).fadeOut("slow");
	$("#instructions2").delay(6200).fadeIn("slow");

	//Flip cards
	var card_ids = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24", "card25"];
	shuffle(card_ids);
	cards_shown = card_ids.slice(0,5);

	$.each(cards_shown, function(index, value) {
		$("#"+value).delay(1000).animate({backgroundColor: "#1E64F2"}, "slow").delay(3000);
		$("#"+value).animate({backgroundColor: "#FF8000"}, "slow").delay(1000);
	});
	
});


//Track and assess user performance
$(".card").click(function(event) {

	//Change color of user selections
	//$(this).animate({backgroundColor: "#1E64F2"}, "slow");
	$(this).css("background-color", "#1E64F2");
	
	//Add card to array
	card_clicked = $(this).attr("id");
	cards_clicked.push(card_clicked);

	//Grade answers
	if (cards_clicked.length == cards_shown.length) {

		$(".instructions").hide();

		if ($(cards_clicked).not(cards_shown).length == 0 && $(cards_shown).not(cards_clicked).length == 0) {
			$("#instructions2").hide();
			$("#instructions3").show();
			$("#replay_button").show();
		}
		
		else {
			$("#instructions2").hide();
			$("#instructions4").show();
			$("#retry_button").show();
		}
	}

});


//Starter library
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  //While there remain elements to shuffle...
  while (0 !== currentIndex) {

	//Pick a remaining element
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	//Swap it with the current element
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }

  return array;

}