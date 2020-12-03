function showMenu() {
    let menu = document.getElementById("menu-hamburguer");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    }

    else {
        menu.style.display = "block";
    }
}