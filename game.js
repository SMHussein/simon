var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = []
var user = [];
var level = 1

function nextSequence(){
  user = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animateButton('#'+randomChosenColour);
  makeSound(randomChosenColour);
  $('h1').html('level '+ level);
  level++
}

$(document).keydown(function(){
  if (gamePattern.length === 0){
  nextSequence();
}
});

$('.btn').click(function(e){
  animatePress(e.target.id);
  makeSound(e.target.id);
  user.push(e.target.id);
  console.log(gamePattern);
  console.log(user);
  check();
})

function check(){

if (user[user.length-1] === gamePattern[user.length-1]){

if (user.length=== gamePattern.length){
    setTimeout(nextSequence,1000);
}

  }else {
  $('h1').html('Game Over , press anykey to continue');
  makeSound('wrong')
  $('body').addClass('game-over');
  setTimeout(function () {
    $('body').removeClass('game-over');
  }, 200);
  user = [];
  gamePattern = [];
  level = 1
}
}

function animateButton(key){
  $(key).animate({opacity: '0.0'}, "fast");
  $(key).animate({opacity: '1'}, "fast");
}
function animatePress(currentColour){
  $('#'+currentColour).addClass('pressed');
  setTimeout(function () {
    $('#'+currentColour).removeClass('pressed');
  }, 50);
}

  function makeSound(key){
  switch (key) {
    case "red":
      var tom1 = new Audio('sounds/red.mp3');
      tom1.play();
      break;

      case "blue":
      var tom2 = new Audio('sounds/blue.mp3');
      tom2.play();
      break;

      case "green":
      var tom3 = new Audio('sounds/green.mp3');
      tom3.play();
      break;

      case "yellow":
      var tom4 = new Audio('sounds/yellow.mp3');
      tom4.play();
      break;

      case "wrong":
      var tom5 = new Audio('sounds/wrong.mp3');
      tom5.play();
      break;

    default: console.log(this.innerHTML);

  }
}
