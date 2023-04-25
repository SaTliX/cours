const myImage = document.getElementById("myImage");
const myAudio = document.getElementById("myAudio");

myImage.addEventListener("click", function() {
  myAudio.play();
});