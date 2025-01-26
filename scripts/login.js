const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");

const loginUser = () => {
  return {
    email: emailLogin.value,
    password: passwordLogin.value,
  };
};

export async function loginAuth(evt) {
  try {
    evt.preventDefault();

    const resp = await fetch(`https://5bcef21902d8a641.mokky.dev/auth`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser()),
    });

    if (!resp.ok) {
      throw new Error("Сетевая ошибка");
    }

    const data = await resp.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("userEmail", emailLogin.value);

    console.log(data);

    window.location.href = "profile.html";
  } catch (err) {
    console.error(`Упс произошла ошибка ${err}`);
  }
}
