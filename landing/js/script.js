document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  const loginBtn = document.querySelector(".btn-1");
  const registerBtn = document.querySelector(".btn-2");
  const joinBtn = document.querySelector(".btn-3");
  const register2Btn = document.querySelector(".btn-4");

  loginBtn.addEventListener("click", () => {
    window.location.href = "./pages/login.html";
  });

  registerBtn.addEventListener("click", () => {
    window.location.href = "./pages/register.html";
  });

  joinBtn.addEventListener("click", () => {
  window.location.href = "./pages/register.html";
  });
  register2Btn.addEventListener("click", () => {
  window.location.href = "./pages/register.html";
  });

});