import { loginAuth } from "./login.js";
import { register } from "./register.js";
import { toggleRegBlock } from "./util.js";

const formRegBtn = document.querySelectorAll(".form__reg-btn");
formRegBtn.forEach((i) => i.addEventListener("click", toggleRegBlock));
// const showUsersBtn = document.getElementById("showUsers");

const reg = document.getElementById("reg");
reg.addEventListener("submit", register);

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("submit", loginAuth);




const fileInput = document.getElementById("fileInput");
const uploadEvent = async (evt) => {
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  try {
    const resp = await fetch("https://5bcef21902d8a641.mokky.dev/uploads", {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
    }
  } catch (err) {
    console.error("False");
  }
};

const uploadAvatar = document.querySelector(".header__user-avatar-upload");
uploadAvatar.addEventListener("change", uploadEvent);
