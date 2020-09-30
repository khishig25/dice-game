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
// NEW GAME

function newGame() {
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  scores = [0, 0];
  console.log("New game", scores);
}
function checkWinner(aaa) {
  if (aaa > 20) {
    console.log("WIN+++++++++++");
    alert("win");
  } else {
    console.log("hojoogui shuu____________");
  }
}
document.querySelector(".btn-new").addEventListener("click", newGame);
checkWinner;

//шоог шидэх
document.querySelector(".btn-roll").addEventListener("click", buttonRection);

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
    var scrs = scrs + roundScore;
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");
    diceDom.style.display = "none";
  }
}

// ------------------------holding tovch darahad
document.querySelector(".btn-hold").addEventListener("click", function () {
  console.log("holding", roundScore);

  if (activePlayer === 0) {
    scores[0] = scores[0] + roundScore;
    roundScore = 0;

    console.log("holding 1", roundScore, activePlayer),
      (document.getElementById("score-0").textContent = scores[0]);
    document.getElementById("current-0").textContent = 0;

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    activePlayer = 1;
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");
    diceDom.style.display = "none";
    checkWinner(scores[0]);
  } else {
    scores[1] = scores[1] + roundScore;
    roundScore = 0;

    console.log("holding 2", roundScore, activePlayer);

    document.getElementById("score-1").textContent = scores[1];
    document.getElementById("current-1").textContent = 0;

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    activePlayer = 0;
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("active");
    diceDom.style.display = "none";
    checkWinner(scores[1]);
  }
});
console.log(win);

//<div class="player-score" id="score-0">43</div>
