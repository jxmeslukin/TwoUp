/*
https://www.ramint.gov.au/sites/default/files/2019/Dollar_Discovery/1-standard-kangaroos-a-privy-mark-35-micro-text.jpg
https://onlinecoin.club/images/coins/Australia/368e9900-ed2d-414f-9dc2-cc8bdb5e0a15.jpg
*/

var wins = 0
var losses = 0 
var odds = 0
var fiveOdds = 0
var numFiveOdds = 0
var bet = null
var coinOne = null
var coinTwo = null
var numThrows = null
var i = 0
var coinChoice = null
var betAmount = null
var myList = document.getElementById('listBox')
var newItem = ""

function game() {
    

    for(i=0; i>totalValues; i++) {
        coinOne = Math.floor(Math.random() * 2)
        coinTwo = Math.floor(Math.random() * 2)
        umThrows = document.getElementById("numRolls").value;
        if(numThrows.length === 0) {
            return(alert("Enter an amount of rolls."));
    }
        if(document.getElementById('headChoice').checked) {
            coinChoice = "H"
    }
        else if(document.getElementById('tailChoice').checked) {
            coinChoice = "T"
      }
        else{
            return(alert("Choose a side"));
        }
    
        if(coinOne === 0) {
            coinOne = "H"
    }
        else {
            coinOne = "T"
        }

        if(coinTwo === 0) {
            coinTwo = "H"
    }
        else {
            coinTwo = "T"
    }
    
    var totalValues = coinChoice + coinOne + coinTwo

        switch(totalValues) {
            case "HHH":
            case "TTT":
                odds = 0
                wins = wins + 1
                newItem = "Throw " + (i+1) + " " + totalValues + " - Win";
                myList.value = myList.value + newItem + "\n";
                break;
            case "HTT":
            case "THH":
                odds = 0
                losses = losses + 1
                newItem = "Throw " + (i+1)
         }
    }
}

