// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Theme toggle with localStorage
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    const savedTheme = localStorage.getItem("cv-theme");
    if (savedTheme === "dark") {
        root.setAttribute("data-theme", "dark");
        if (themeToggle) {
            themeToggle.querySelector(".theme-icon").textContent = "☀️";
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = root.getAttribute("data-theme");
            if (currentTheme === "dark") {
                root.removeAttribute("data-theme");
                localStorage.setItem("cv-theme", "light");
                themeToggle.querySelector(".theme-icon").textContent = "🌙";
            } else {
                root.setAttribute("data-theme", "dark");
                localStorage.setItem("cv-theme", "dark");
                themeToggle.querySelector(".theme-icon").textContent = "☀️";
            }
        });
    }
});