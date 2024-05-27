const toggleDarkMode = document.getElementById("input")
toggleDarkMode.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
    } else {
        document.documentElement.setAttribute("data-theme", "light")

    }
})