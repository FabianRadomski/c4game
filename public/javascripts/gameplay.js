var boardMatrix = [
    ['n', 'n', 'n', 'n', 'n', 'n'],
    ['n', 'n', 'n', 'n', 'n', 'n'],
    ['n', 'n', 'n', 'n', 'n', 'n'],
    ['n', 'n', 'n', 'n', 'n', 'n'],
    ['n', 'n', 'n', 'n', 'n', 'n'],
    ['n', 'n', 'n', 'n', 'n', 'n'],
    ['n', 'n', 'n', 'n', 'n', 'n'],
    ['n', 'n', 'n', 'n', 'n', 'n']
  ]
  

$(document).ready(function() { 
    // INSERTING A NEW COIN
    $(".column").click( function() { 
      console.log("test");
        var columnId = parseInt($(this).attr("id").charAt(3));
        var x = 5;
        
        while(boardMatrix[columnId - 1][x] != 'n'){
            
            x = x - 1;
  
            if(x == -1){
  
              return;
            }
  
        }

        console.log(x);
  
        
        var cnum = (columnId - 1) * 6 + x + 1;
        boardMatrix[columnId - 1][x] = 'y';
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