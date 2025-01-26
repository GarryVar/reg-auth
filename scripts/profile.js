import { logOut } from "./logout.js";

const btnBurger = document.querySelector(".btn__burger");
const btnCLose = document.querySelector(".btn__close");
const nav = document.querySelector(".nav");

const btnIconToggle = () => {
  if (btnCLose.classList.contains("btn--hidden")) {
    btnCLose.classList.remove("btn--hidden");
    btnBurger.classList.add("btn--hidden");
  } else {
    btnCLose.classList.add("btn--hidden");
    btnBurger.classList.remove("btn--hidden");
  }
};

const navToggle = () => {
  btnIconToggle();

  nav.classList.contains("nav--hidden")
    ? nav.classList.remove("nav--hidden")
    : nav.classList.add("nav--hidden");
};

const btnNav = document.querySelector(".btn--user-nav");
btnNav.addEventListener("click", navToggle);

const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "index.html";
}

const greet = (currentUser) => {
  const userName = document.querySelector(".header__user-name");
  userName.textContent = currentUser.firstName;
};

const getUser = async () => {
  const resp = await fetch(`https://5bcef21902d8a641.mokky.dev/users`);
  const data = await resp.json();

  let currentUser = "";
  const currentUserEmail = localStorage.getItem("userEmail");
  if (!currentUserEmail) {
    document.textContent = "Такого пользователя нет";
  }

  currentUser = data.find((i) => i.email === currentUserEmail);
  greet(currentUser);
  console.log(data);
};

const logOutBtn = document.getElementById("logout-btn");
logOutBtn.addEventListener("click", logOut);

window.addEventListener("DOMContentLoaded", getUser);
