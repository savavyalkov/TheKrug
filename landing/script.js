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
});