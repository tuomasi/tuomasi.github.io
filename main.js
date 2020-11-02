function toggleTheme(e) {
    if (e.currentTarget.classList.contains("light")) {
        document.documentElement.setAttribute("theme", "light");
        localStorage.setItem("thomasbrunner.xyz.theme", "light");
    } else {
        document.documentElement.setAttribute("theme", "dark");
        localStorage.setItem("thomasbrunner.xyz.theme", "dark");
    }
}

document.querySelectorAll(".theme-toggle__btn").forEach(function (btn) {
    btn.addEventListener("click", toggleTheme);
});
