/* Strefa wolna od stref wolnych*/
var game = function(gameID) {
  this.player1 = null;
  this.player2 = null;
  this.id = gameID;
  this.gameState = "START";
};

game.prototype.transitionStates = {};
game.prototype.transitionStates["START"] = 0; 
game.prototype.transitionStates["MOVE A"] = 1;
game.prototype.transitionStates["MOVE B"] = 2;
game.prototype.transitionStates["A WON"] = 3; //A won
game.prototype.transitionStates["B WON"] = 4; //B won
game.prototype.transitionStates["ABORTED"] = 5;

game.prototype.transitionMatrix = [
  [0, 1, 0, 0, 0, 0], //START
  [1, 0, 1, 1, 1, 1], //1 PL
  [0, 1, 0, 1, 1, 1], //2 PL
  [0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0], //A WON
  [0, 0, 0, 0, 0, 0], //B WON
  [0, 0, 0, 0, 0, 0] //ABORTED
];

game.prototype.boardMatrix = [
  ['n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n']
]

game.prototype.isValidTransition = function(from, to) {
  console.assert(
    typeof from == "string",
    "%s: Expecting a string, got a %s",
    arguments.callee.name,
    typeof from
  );
  console.assert(
    typeof to == "string",
    "%s: Expecting a string, got a %s",
    arguments.callee.name,
    typeof to
  );
  console.assert(
    from in game.prototype.transitionStates == true,
    "%s: Expecting %s to be a valid transition state",
    arguments.callee.name,
    from
  );
  console.assert(
    to in game.prototype.transitionStates == true,
    "%s: Expecting %s to be a valid transition state",
    arguments.callee.name,
    to
  );

  let i, j;
  if (!(from in game.prototype.transitionStates)) {
    return false;
  } else {
    i = game.prototype.transitionStates[from];
  }

  if (!(to in game.prototype.transitionStates)) {
    return false;
  } else {
    j = game.prototype.transitionStates[to];
  }

  return game.prototype.transitionMatrix[i][j] > 0;
};

game.prototype.isValidState = function(s) {
  return s in game.prototype.transitionStates;
};

game.prototype.setStatus = function(w) {
  console.assert(
    typeof w == "string",
    "%s: Expecting a string, got a %s",
    arguments.callee.name,
    typeof w
  );

  if (
    game.prototype.isValidState(w) &&
    game.prototype.isValidTransition(this.gameState, w)
  ) {
    this.gameState = w;
    console.log("[STATUS] %s", this.gameState);
  } else {
    return new Error(
      "Impossible status change from %s to %s",
      this.gameState,
      w
    );
  }
};

if (
  game.prototype.isValidState(w) &&
  game.prototype.isValidTransition(this.gameState, w)
) {
  this.gameState = w;
  console.log("[STATUS] %s", this.gameState);
} else {
  return new Error(
    "Impossible status change from %s to %s",
    this.gameState,
    w
  );
};

$(document).ready(function() { 
  $(".column").click( function() {
    console.log("kupa śmierdzi");
      var columnId = parseInt($(this).attr("id").charAt(3));
      var x = 5;
      
      while(boardMatrix[columnId - 1][x] == 'y' || boardMatrix[columnId - 1][x] == 'r'){
          
          x = x - 1;

          if(x == -1){

            return;
          }

      }

      
      var cnum = (columnID - 1) * 6 + x + 1;
      $("#"+cnum).css("background-color", "red");
});

var startTimer = new function () {
  var countDownDate = new Date().getTime();

  // calls function every 1000ms
  var x = setInterval(function () {

      var now = new Date().getTime();

      var distance = now - countDownDate;


      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (minutes < 10) {
          if (seconds < 10) document.getElementById("clock").innerHTML = "0" + minutes + ":0" + seconds;
          else document.getElementById("clock").innerHTML = "0" + minutes + ":" + seconds;
      }
      else {
          if (seconds < 10) document.getElementById("clock").innerHTML = minutes + ":0" + seconds;
          else document.getElementById("clock").innerHTML = minutes + ":" + seconds;
      }
  }, 1000);
}
}); 
/* Strefa wolna od lgbt */
