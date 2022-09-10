let menu1 = document.querySelector(".burger");
let menu_burger = document.querySelector(".menu_burger");
let open_menu = document.querySelector(".menu_deux");

menu1.addEventListener("click", function () {
    if (menu_burger.style.display = "none") {
        menu_burger.style.display = "block";
        open_menu.style.display = "block";
    } else
        return false;
});

menu_burger.addEventListener("click", function () {
    open_menu.style.display = "none";
    if (menu_burger.style.display = "block") {
        menu_burger.style.display = "none";
    } else
        return false;
});



