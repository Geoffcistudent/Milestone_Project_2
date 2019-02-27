var SimonSaid = [];
var answers = [];
var rounds = 0;
//all_or_nothing Strict mode allows one  mistake per round. false if 'relaxed' mode
var all_or_nothing = true;
//in all_or_nothing Strict mode, there is no last chance
var lastChance = false;

var addColor = function(arr) {
  var colorsArray = ["green", "red", "yellow", "blue"];
  return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
};

var flashLights = function(arr) {
  var i = 0;

  var interval = setInterval(function() {
    $("#" + arr[i]).fadeTo("slow", 0).fadeTo("slow", 1);
    $("#sound-" + arr[i])[0].play();
    i++;
    if (i >= arr.length) {
      clearInterval(interval);
    }
  }, 1000);
};

var resetAnswers = function() {
  answers = [];
};

var updateRounds = function() {
  rounds++;
  $("#show-rounds").html(rounds);
};

var resetGame = function() {
  rounds = 0;
  $("#show-rounds").html(rounds);
  SimonSaid = [];
  if (all_or_nothing === false) {
    lastChance = true;
  }
  $("#mode").on("click");
  $("#start").on("click");
  resetAnswers();
};

var playerTurn = function() {
  //during the game we don't want the player to switch between all_or_nothing (Strict mode) and relaxed
  $("#mode").off("click");
  $("#start").off("click");

  //winning condition
  if (rounds === 20) {
    alert("Wow! You, are the Best.  What a memory");
    resetGame();
  }

  updateRounds();
  addColor(SimonSaid);
  flashLights(SimonSaid);

  $(".button").off("click").on("click", function() {
    $("#sound-" + $(this).attr("id"))[0].play();
    answers.push($(this).attr("id"));

    for (var i = 0; i < answers.length; i++) {
      //correct answer
      if (JSON.stringify(SimonSaid) === JSON.stringify(answers)) {
        resetAnswers();
        playerTurn();
        break;
      }

      //wrong answer
      if (answers[i] !== SimonSaid[i]) {
        if (all_or_nothing === false && lastChance === true) {
          lastChance = false;
          alert("You get one more chance.You can do It");
          resetAnswers();
          flashLights(SimonSaid);
        } else if (
          answers[i] !== SimonSaid[i] &&
          lastChance === false
        ) {
          alert("Try again.  Practice makes the perfect.  I know you can do It...!");
          resetGame();
          break;
        }
      }
    }
  });
};

$("#mode").click(function() {
  switch (all_or_nothing) {
    case true:
      all_or_nothing = false;
      lastChance = true;
      $("#mode").html("Mode: Relaxed");
      break;

    case false:
      all_or_nothing = true;
      lastChance = false;
      $("#mode").html("Mode: all_or_nothing");
      break;
  }
});


$("#start").click(function() {
  playerTurn();
});


