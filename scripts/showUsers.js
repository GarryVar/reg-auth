const ul = document.getElementById("users");
const h3 = document.querySelector("h3");
const showUsersBtn = document.querySelector("#showUsers");

export async function fetchUsers() {
  try {
    showLoading();

    const response = await fetch("https://9726754cbc61de34.mokky.dev/users");
    if (!response.ok) {
      throw new Error("Сетевая ошибка");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Ошибка", err);
  }
}

/* const render = ({ firstName, secondName, email }) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <div>
      <h3>${firstName}</h3>
      <h4>${secondName}</h4>
    </div>
    <a href="mailto:${email}">${email}</a>
    `;
  return li;
};

const showResult = (users) => users.forEach((i) => ul.appendChild(render(i)));
const showLoading = () => (h3.innerHTML = "Загрузка...");
const showresultsCount = function (data) {
  let str1 = "пользователей";
  let str2 = "пользователя";

  if (data > 4) {
    h3.innerHTML = `Найдено ${data} ${str1}`;
  } else if (data <= 4 && data > 1) {
    h3.innerHTML = `Найдено ${data} ${str2}`;
  }
};

const loadUsers = () => {
  ul.innerHTML = "";

  fetchUsers().then((d) => {
    showresultsCount(d.length);
    showResult(d);
  });
};
showUsersBtn.addEventListener("click", loadUsers); */
