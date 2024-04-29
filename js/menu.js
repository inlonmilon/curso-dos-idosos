const menu = document.getElementById("menu");
const menulateral = document.getElementById("menulateral");

function ativarMenu(){
    menulateral.classList.toggle("ativarMenu")
}

menu.addEventListener("click", ativarMenu)