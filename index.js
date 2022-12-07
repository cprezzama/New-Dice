var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

var randDiceImg1 = "dice" + randNum1 + ".png";
var randDiceImg2 = "dice" + randNum2 + ".png";

var randImgSrc1 = "images/" + randDiceImg1;
var randImgSrc2 = "images/" + randDiceImg2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randImgSrc1);
image2.setAttribute("src", randImgSrc2);

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
} else if (randNum1 < randNum2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
