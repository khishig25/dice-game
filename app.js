/*
toglogchiin eelj hadgalah huvisagch
tohlohchiin tsugluulsan onoo
тоглогчийн ээлжийн оноо
шоо буусан оноог хадгалах нэгээс 6 хүртэл санамсаргүй утгаар цэнэглэнэ.
нэгдүгээр тоглогч 1 гэх мэт
*/
var activePlayer = 1;
var scores = [0, 0];
var roundScore = 0;
var diceNumber = Math.round(Math.random() * 5) + 1;

//document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").innerHTML = "<em>dice</em>";

//програм эхлэхэд бэлдэх
//document.querySelector("#score-0").textContent = 0;
// ene
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.round(Math.random() * 5) + 1;
  console.log(diceNumber);
  diceDom.src = "dice-" + diceNumber + ".png";
});
diceDom.style.display = "block";

console.log(diceNumber);

//<div class="player-score" id="score-0">43</div>
