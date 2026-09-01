
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
document.documentElement.setAttribute(
"data-theme",
savedTheme
);
}

function updateThemeButton() {

const currentTheme =
    document.documentElement.getAttribute("data-theme");

const isDark = currentTheme === "dark";

themeToggle.textContent = isDark ? "☀️" : "🌙";

themeToggle.setAttribute(
    "aria-pressed",
    String(isDark)
);

themeToggle.setAttribute(
    "aria-label",
    isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
);

}

themeToggle.addEventListener("click", () => {

const currentTheme =
    document.documentElement.getAttribute("data-theme");

const newTheme =
    currentTheme === "dark"
        ? "light"
        : "dark";

document.documentElement.setAttribute(
    "data-theme",
    newTheme
);

localStorage.setItem(
    "theme",
    newTheme
);

updateThemeButton();

});

updateThemeButton();