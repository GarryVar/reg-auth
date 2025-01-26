//Rgister

const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const createUser = () => {
  return {
    firstName: firstName.value,
    secondName: secondName.value,
    email: email.value,
    password: password.value,
  };
};

export const clearValues = () => {
  firstName.value = "";
  secondName.value = "";
  email.value = "";
  password.value = "";
};

export const register = async (evt) => {
  try {
    evt.preventDefault();

    console.log(createUser());

    const resp = await fetch(`https://5bcef21902d8a641.mokky.dev/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUser()),
    });

    if (!resp.ok) {
      throw new Error("Сетевая ошибка");
    }

    const data = await resp.json();
    console.log(data);

    localStorage.setItem("token", data.token);
    localStorage.setItem("userEmail", email.value);
    window.location.href = "profile.html";

    clearValues();
  } catch (err) {
    console.error(`Упс произошла ошибка ${err}`);
  }
};
