let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("btn-flash");
    setTimeout(function () {
        btn.classList.remove("btn-flash");
    }, 100);
}

function levelUp() {
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);

    userSeq.push(userColor);
    checkAns();
}

function checkAns() {
    let idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        h3.innerText = "Correct!";
        setTimeout(levelUp, 700);
    } else {
        h3.innerHTML = `Wrong answer. Your score was <b>${level}</b>. Press any key to Start!`;
        reSet();
    }
}

function reSet() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}