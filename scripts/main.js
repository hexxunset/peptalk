const numOptions = 2;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generatePeptalk() {
    document.getElementById("peptalk1").innerHTML = option1[getRandomInt(numOptions)] + " ";
    document.getElementById("peptalk2").innerHTML = option2[getRandomInt(numOptions)] + " ";
    document.getElementById("peptalk3").innerHTML = option3[getRandomInt(numOptions)] + " ";
    document.getElementById("peptalk4").innerHTML = option4[getRandomInt(numOptions)] + " ";
}

const option1 = ["Champ,", "Fact:"]
const option2 = ["the mere idea of you", "your soul"]
const option3 = ["has serious game,", "rains magic,"]
const option4 = ["24/7.", "can I get an amen?"]

// MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
function showInspo() {
      modal.style.display = "block";
      modalImg.src = "images/peptalk.png";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}