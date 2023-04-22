var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"]; 
var level = 0;
var started = false;


//jedan sequence
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4); 
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);


};



//za pocetak
$(document).keypress(function() {
    if (!started) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });




//ceo klik
$("div[type]").click(function(){
    var userChosenColour  = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});





//funkcija koja pusta muziku
function playSound(name){
    var zvuk = new Audio("sounds/" + name + ".mp3");
    zvuk.play();

};




//animacije na pritisku
function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function() {
    $("#"+currentColour).removeClass('pressed');
}, 100)
};

//proverava odgovor

function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        
    $("body").addClass("game-over");
    setTimeout(function() {
    $("body").removeClass('game-over');
    }, 200);
        var greska = new Audio("sounds/wrong.mp3");
        greska.play();
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

//restart 
function startOver(){
    level = 0; 
    gamePattern = [];
    started = false;
}







