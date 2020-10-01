/*
toglogchiin eelj hadgalah huvisagch
tohlohchiin tsugluulsan onoo
тоглогчийн ээлжийн оноо
шоо буусан оноог хадгалах нэгээс 6 хүртэл санамсаргүй утгаар цэнэглэнэ.
нэгдүгээр тоглогч 1 гэх мэт
*/

var diceNumber = Math.round(Math.random() * 5) + 1;
var win = false;
var roundScore = 0;
var activePlayer = 0;
var scores = [];
var diceDom = document.querySelector(".dice");
var isGameOver;

newGame();

//document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").innerHTML = "<em>dice</em>";

//програм эхлэхэд бэлдэх
//document.querySelector("#score-0").textContent = 0;
// ene

function newGame() {
  isGameOver = false;
  scores = [0, 0];
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  scores = [0, 0];

  roundScore = 0;
  diceDom.style.display = "none";
  document.querySelector(".player-0-panel").classList.add("active");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("winner");
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";
  activePlayer = 0;
}

//шоог шидэх
document.querySelector(".btn-roll").addEventListener("click", buttonRection);

// ------------------------holding tovch darahad
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver === false) {
    //console.log("holding", roundScore);

    //аль тогогчид хамаарах
    /* өөрөөр
    scores[activePlayer]=scores[activePlayer]+roundScore;
    (document.getElementById("score-" + activePlayer).textContent=scores[activePlayer];
*/
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      //тоглогчийн төлөв солих
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent =
        "WINNER !!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      swToNextPlayer();
    }
  }
});
console.log(win);
///--------------Тоглогчийн ээлж солидог функц-________________----
function swToNextPlayer() {
  // ээлжийн оноог 0лэнэ
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

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
  if (isGameOver == false) {
    var diceNumber = Math.round(Math.random() * 5) + 1;
    diceDom.style.display = "block";
    console.log(diceNumber);
    //shoonii zurag solih
    diceDom.src = "dice-" + diceNumber + ".png";
    // buusan too negees yalgaatai bol idevhtei toglogchid nemne
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      swToNextPlayer();
    }
  }
}
// NEW GAME
// New game+++++++++++++++++++++
document.querySelector(".btn-new").addEventListener("click", newGame);
