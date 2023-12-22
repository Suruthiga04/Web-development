"use strict";
let num1 = Math.trunc(Math.random() * 100) + 1;
let num2 = Math.trunc(Math.random() * 100) + 1;
let num3 = Math.trunc(Math.random() * 100) + 1;
let qnum = 1;
let score = 0;
let pn1, pn2, pn3;
document.querySelector("#no1").textContent = num1;
document.querySelector("#no2").textContent = num2;
document.querySelector("#no3").textContent = num3;
document.querySelector("#score").textContent = score;
document.querySelector("#qnno").textContent = qnum;

function setup() {
  document.querySelector("body").style.backgroundColor = "#86e3ca";
  num1 = Math.trunc(Math.random() * 100) + 1;
  num2 = Math.trunc(Math.random() * 100) + 1;
  num3 = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".in").value = undefined;
  document.querySelector("#no1").textContent = num1;
  document.querySelector("#no2").textContent = num2;
  document.querySelector("#no3").textContent = num3;
}
function startAgain() {
  if (qnum === 6) {
    display(`You scored ${score} out of 5🤠`);
  } else {
    display("Calculate the answer📱");
  }
  qnum = 1;
  document.querySelector("#qnno").textContent = qnum;
  score = 0;
  document.querySelector("#score").textContent = score;
  setup();
}
function next() {
  qnum++;
  document.querySelector("#qnno").textContent = qnum;
  setup();
  display("Calculate the answer📱");
  if (qnum === 6) {
    startAgain();
  }
}
function display(txt) {
  document.querySelector(".p2").textContent = txt;
}
function check() {
  let ans = Number(document.querySelector(".in").value);
  if (!ans) {
    display("No number entered yet😅");
  }
  if (ans === num1 + num2 + num3) {
    if (pn1 !== num1 && pn2 !== num2 && pn3 !== num3) score++;
    pn1 = num1;
    pn2 = num2;
    pn3 = num3;
    document.querySelector("#score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#3eed64";
    display("You are absolutely right🎉");
  } else if (ans !== num1 + num2 + num3) {
    display("Oops!Wrong answer😣");
    document.querySelector("body").style.backgroundColor = "#d47663";
  }
}
document.querySelector(".btn.start").addEventListener("click", startAgain);
document.querySelector(".btn.next").addEventListener("click", next);
document.querySelector(".btn.submit").addEventListener("click", check);
