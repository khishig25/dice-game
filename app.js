/*
toglogchiin eelj hadgalah huvisagch
tohlohchiin tsugluulsan onoo
тоглогчийн ээлжийн оноо
шоо буусан оноог хадгалах нэгээс 6 хүртэл санамсаргүй утгаар цэнэглэнэ.
нэгдүгээр тоглогч 1 гэх мэт
*/
var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
var diceNumber = Math.round(Math.random() * 5) + 1;
var win = false;

//document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").innerHTML = "<em>dice</em>";

//програм эхлэхэд бэлдэх
//document.querySelector("#score-0").textContent = 0;
// ene

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("score-0").textContent = scores[0];
document.getElementById("score-1").textContent = scores[1];
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// New game+++++++++++++++++++++
document.querySelector(".btn-new").addEventListener("click", newGame);

//шоог шидэх
document.querySelector(".btn-roll").addEventListener("click", buttonRection);

// ------------------------holding tovch darahad
document.querySelector(".btn-hold").addEventListener("click", function () {
  console.log("holding", roundScore);

  //аль тогогчид хамаарах
  /* өөрөөр
    scores[activePlayer]=scores[activePlayer]+roundScore;
    (document.getElementById("score-" + activePlayer).textContent=scores[activePlayer];
*/
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER !!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    swToNextPlayer();
  }
});
console.log(win);
///--------------Тоглогчийн ээлж солидог функц-________________----
function swToNextPlayer() {
  // ээлжийн оноог 0лэнэ
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  //тоглогчийн төлөв солих

  // <div class="player-0-panel active"> classlisteees hasah nemeh
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");

  diceDom.style.display = "none";
}
function buttonRection() {
  var diceNumber = Math.round(Math.random() * 5) + 1;
  diceDom.style.display = "block";
  console.log(diceNumber);
  //shoonii zurag solih
  diceDom.src = "dice-" + diceNumber + ".png";
  // buusan too negees yalgaatai bol idevhtei toglogchid nemne
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    swToNextPlayer();
  }
}
// NEW GAME

function newGame() {
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  scores = [0, 0];
  console.log("New game", scores);
}

//<div class="player-score" id="score-0">43</div>
