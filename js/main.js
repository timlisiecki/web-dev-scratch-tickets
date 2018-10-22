// 
var currentAmount= 25;
var prizeAmount = 0;

var prize;
var winnerImg = "images/prizes/winner-jrwebdev.png",
    loserImg = "images/prizes/loser.png";
// Store all of the symbols in variables
var symbol1 = 'images/symbols/logo-html.png',
    symbol2 = 'images/symbols/logo-css.png',
    symbol3 = 'images/symbols/logo-js.png',
    symbol4 = 'images/symbols/cable.png',
    symbol5 = 'images/symbols/computer.png',
    symbol6 = 'images/symbols/keyboard.png',
    symbol7 = 'images/symbols/laptop.png',
    symbol8 = 'images/symbols/mouse.png',
    symbol9 = 'images/symbols/phone.png',
    symbol10 = 'images/symbols/printer.png';
// Store boxes id's each in variable
var box1 = "#box1",
    box2 = "#box2",
    box3 = "#box3",
    box4 = "#box4",
    box5 = "#box5",
    box6 = "#box6";
// Store boxes in an array
var boxes = [ box1, box2, box3, box4, box5, box6 ];
// Stores symbols in an array
var symbolArray= [ symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7,symbol8, symbol9, symbol10 ];
var selectSymbol; // Makes the empty variable so that each box is a random symbol

// Logic when scratching each box. Also populates each box with a random symbol
function scratch(box) {
  selectSymbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];
  console.log(selectSymbol);
  $(box).wScratchPad({
    // the size of the eraser
    size        : 30,    
    // the randomized scratch image   
    bg:  selectSymbol,
    // give real-time updates
    realtime    : true, 
    // The overlay image
    fg: 'images/scratch-foreground.png',
    // The cursor (coin) image
    'cursor': 'url("images/coin1.png") 5 5, default',
  });
}

function scratchPrize() {
  $('#prize').wScratchPad({
    // the size of the eraser
    size        : 70,    
    // the randomized scratch image   
    bg          : prize,
    // give real-time updates
    realtime    : true, 
    // The overlay image
    fg          : 'images/scratch-foreground-prize.png',
    // The cursor (coin) image
    'cursor': 'url("images/coin1.png") 5 5, default',
    
    scratchMove: function (e, percent) {
      // Show the plain-text dollar amount when the scratch area is 50% scratched
      if (percent > 50) {
        // If you won, displays winning amount for this card, then adds that to the current amount in wallet
        if (prize === winnerImg) {
          $("#current-prize").replaceWith("<span id='current-prize'>" + (prizeAmount + 10).toString() + "</span>");
          $("#current-amount").replaceWith("<span id='current-amount'>" + (currentAmount + 10).toString() + "</span>");
        // If you lose, subtract the ticket value from the current wallet amount
        } else if (prize === loserImg) {
          $("#current-amount").replaceWith("<span id='current-amount'>" + (currentAmount -1).toString() + "</span>");
        }
      }
    }
 });
}

function displayBoxes() {
  var ticketSymbols = [];
  for (var i = 0; i < boxes.length; i++) {
    scratch(boxes[i]);
    console.log(boxes[i]);
    // Loops through to find each winning symbol in each box. If true, add the string to the array
    if (selectSymbol === symbol1) {
      ticketSymbols.push("html");
      console.log("html");
    } 
    if (selectSymbol === symbol2) {
      ticketSymbols.push("css");
      console.log("css");
    } 
    if (selectSymbol === symbol3) {
      ticketSymbols.push("js");
      console.log("js");
    } 
    if (selectSymbol !== symbol1 && selectSymbol !== symbol2 && selectSymbol !== symbol3) {
      console.log(false);
    }
  }
  console.log(ticketSymbols);
  
  // Check to see if the symbols match each of the winning symbols
  if (ticketSymbols.includes("html") && ticketSymbols.includes("css") && ticketSymbols.includes("js")) {
    prize = winnerImg;
    console.log("You are a winner!!");
  } else {
    prize = loserImg;
    console.log("You are a loser!");
  }
}

 
displayBoxes();
scratchPrize();

