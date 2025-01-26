export const logOut = (evt) => {
  evt.preventDefault();
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  window.location.href = "index.html";
};
