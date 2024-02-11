// 필요한 html elements 다 가져오기
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; // 남은 기회
let userValueList = []; // 유저가 입력한 숫자들 리스트

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  // 랜덤숫자 뽑기

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNumber);
}

function play() {
  // 숫자 추측하기
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1부터 100 사이의 숫자를 입력 해주세요";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";

    return;
  }

  chances--;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdieMqb%2FbtsCycKuUCX%2Fe5o40TN9ctf3wQkLBs1bk0%2Fimg.png";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdieMqb%2FbtsCycKuUCX%2Fe5o40TN9ctf3wQkLBs1bk0%2Fimg.png";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src =
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdieMqb%2FbtsCycKuUCX%2Fe5o40TN9ctf3wQkLBs1bk0%2Fimg.png";
    resultText.textContent = "정답!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //리셋
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "https://www.google.co.kr/url?sa=i&url=https%3A%2F%2Fr-ayo.com%2F231&psig=AOvVaw1Fm65yA5URhl9qgpv8hAO9&ust=1707742230252000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjCgtupo4QDFQAAAAAdAAAAABAE";
  resultText.textContent = "죽기 싫다면 맞춰라";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList = [];
}

pickRandomNumber();