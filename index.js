$("button").on("click", function () {
  const clickedKey = this.innerHTML;
  makeSound(clickedKey);
  makeAnimation(clickedKey);
});

$(document).on("keypress", function (event) {
  const pressedKey = event.key;
  makeSound(pressedKey);
  makeAnimation(pressedKey);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function makeAnimation(button) {
  const activeButton = "." + button;
  $(activeButton).addClass("pressed");
  setTimeout(() => {
    $(activeButton).removeClass("pressed");
  }, 100);
}
