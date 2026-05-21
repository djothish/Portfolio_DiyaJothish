const countdown = document.querySelector(".countdown");

const numbers = ["3", "2", "1"];

let index = 0;

setInterval(() => {

    index = (index + 1) % numbers.length;

    countdown.textContent = numbers[index];

}, 2000);