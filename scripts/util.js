export const toggleRegBlock = () => {
  const loginBlock = document.querySelector(".form--login");
  const regBlock = document.querySelector(".form--reg");

  if (regBlock.classList.contains("hidden")) {
    regBlock.classList.remove("hidden");
    loginBlock.classList.add("hidden");
  } else {
    regBlock.classList.add("hidden");
    loginBlock.classList.remove("hidden");
  }
};
