/*
https://www.ramint.gov.au/sites/default/files/2019/Dollar_Discovery/1-standard-kangaroos-a-privy-mark-35-micro-text.jpg
https://onlinecoin.club/images/coins/Australia/368e9900-ed2d-414f-9dc2-cc8bdb5e0a15.jpg
*/



function game() {

    var wins = 0
    var losses = 0 
    var odds = 0
    var fiveOdds = 0
    var numFiveOdds = 0
    var bet = document.getElementById('betAmount').value;
    var numThrows = document.getElementById('numRolls').value;
    var i = 0
    var coinChoice = null
    var betAmount = null
    var myList = document.getElementById('listBox')
    var newItem = ""
    console.log(numThrows);
    clearListBox(myList);

    for(i=0; i < numThrows; i++) {
        var coinOne = Math.floor(Math.random() * 2)
        var coinTwo = Math.floor(Math.random() * 2)
        console.log(coinOne);
        numThrows = document.getElementById("numRolls").value;
        if(numThrows.length === 0) {
            return(alert("Enter an amount of rolls."));
    }
        if(bet.length === 0) {
            return(alert("Enter a bet."));
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
                bet = bet * 2;
                newItem = "Throw " + (i+1) + ": " + totalValues + " - Win - Bet: " + bet;
                myList.value = myList.value + newItem + "\n";
                
                break;
            case "HTT":
            case "THH":
                odds = 0
                losses = losses + 1
                bet = bet / 2;
                newItem = "Throw " + (i+1) + ": " + totalValues + " - Lose - Bet: " + bet;
                myList.value = myList.value + newItem + "\n";
                break;
            default:
                odds = odds + 1 
                if(odds === 5) {
                    bet = bet - (bet / 2);
                    newItem = "Throw " + (i+1) + ": " + totalValues + " - Lose (Five Odds) - Bet: " + bet;
                    myList.value = myList.value + newItem + "\n";
                    fiveOdds = fiveOdds + 1 
                    odds = 0
                } else {
                    newItem = "Throw " + (i+1) + ": " + totalValues + " - Odds - Bet: " + bet;
                    myList.value = myList.value + newItem + "\n";
                }
                break;
         }
         console.log(bet)
    }
}

function clearListBox(myList) {
    myList.value = ""
}
