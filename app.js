const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-section1-nav-group2");
const navMenus = document.querySelector(".header-section1-nav-group2-items");
const sec2 = document.querySelector(".header-section2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  sec2.classList.toggle("active");
  navMenus.classList.toggle("active");
});

const quotes = [
  "Believe you can and you're halfway there.",
  "Success is the sum of small efforts repeated daily.",
  "The only way out is through.",
  "Dream big. Work hard. Stay focused.",
  "Everything you need is already inside you.",
  "What you get by achieving your goals is not as important.",
  "Your time is limited, don't waste it living someone else's life.",
  "Success is not final, failure is not fatal.",
  "Life is what happens when you're busy making other plans.",
  "You miss 100% of the shots you don’t take.",
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteContainer = document.getElementById("quoteContainer");
let index = 0;

quoteBtn.addEventListener("click", () => {
  console.log(index);

  quoteContainer.innerHTML = quotes[index];
  index++;
  if (index > 9) {
    index = 0;
  }
});

const form = document.getElementById("form");
let name1 = document.getElementById("name");
let tel = document.getElementById("tel");
let addy = document.getElementById("addy");
let select = document.getElementById("select");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("you got it!");
  tel.value = "";
  name1.value = "";
  addy.value = "";
  select.value = "0";
});
