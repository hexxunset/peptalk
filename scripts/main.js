const numOptions = 18;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generatePeptalk() {
  document.getElementById("peptalk1").innerHTML = option1[getRandomInt(numOptions)] + " ";
  document.getElementById("peptalk2").innerHTML = option2[getRandomInt(numOptions)] + " ";
  document.getElementById("peptalk3").innerHTML = option3[getRandomInt(numOptions)] + " ";
  document.getElementById("peptalk4").innerHTML = option4[getRandomInt(numOptions)] + " ";
}


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


// PEP TALK OPTIONS
const option1 = ["Champ,", "Fact:", "Everybody says", "Dang...", "Check it:", "Just saying...", "Superstar,", "Tiger,", "Self,", "Know this:", "News alert:", "Girl,", "Ace", "Excuse me but", "Experts agree:", "In my opinion,", "Hear ye, hear ye:", "Okay, listen up:"]
const option2 = ["the mere idea of you", "your soul", "your hair today", "everything you do", "your personal style", "every thought you have", "that sparkle in your eye", "your presence here", "what you got going on", "the essential you", "your life's journey", "that saucy personality", "your DNA", "that brain of yours", "your choice of attire", "the way you roll", "whatever your secret is", "all of ya'll"]
const option3 = ["has serious game,", "rains magic,", "deserves the Nobel Prize,", "raises the roof,", "breeds miracles,", "is paying off big time,", "shows mad skills,", "just shimmers,", "is a national treasure,", "gets the party hopping,", "is the next big thing,", "roars like a lion,", "is a rainbow factory,", "is made of diamonds,", "makes birds sing,", "should be taught in school,", "makes my world go 'round,", "is 100% legit"]
const option4 = ["24/7.", "can I get an amen?", "and that's a fact.", "so treat yourself.", "you feel me?", "that's just science.", "would I lie?", "for reals.", "mic drop.", "you hidden gem.", "snuggle bear.", "period.", "can I get an amen?", "now let's dance.", "high five.", "say it again!", "according to CNN.", "so get used to it."]