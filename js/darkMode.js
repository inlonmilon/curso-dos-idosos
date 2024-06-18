const changeThemeButton = document.getElementById("changeThemeButton")

function changeTheme() {
    if (document.documentElement.getAttribute("data-theme") === "dark"){ 
        document.documentElement.getAttribute("data-theme") = "light" 
} 
    
} 