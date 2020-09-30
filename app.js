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
var dice = Math.round(Math.random() * 5) + 1;

//document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").innerHTML = "<em>dice</em>";

//програм эхлэхэд бэлдэх
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log(dice);

//<div class="player-score" id="score-0">43</div>
