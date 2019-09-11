var deckOfCards = () =>{
    var deck = [];
    var suits = ["spades", "diamonds", "clubs", "hearts"];
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
    for(let i=0;i<suits.length;i++){
        for(let j=0;j<values.length;j++){
            var card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    shuffle(deck); 
    //console.log(deck);
    distribution(deck);
    //playerCards(array);
}
var shuffle = (deck) =>{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];
		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}
var distribution = (deck) =>{
    var k =0;
    var array = [];
    for(let i=0;i<4;i++){
        var arr = [];
        for(let j=k;j<k+9;j++){
            arr.push(deck[j]);
        }
        array.push(arr);
        k = k+9;
    }
    //console.log(array);
    playerCards(array);
}
var playerCards = (array) =>{
    var player = ["ram","sham","suresh","ohm"];
    for(let i=0;i<4;i++){
        console.log("cards of " + player[i] );
       // console.log( array[i]);
        //array[i].sort();
        console.log( array[i]);
        
    }
}
module.exports = {deckOfCards , shuffle , distribution}

