const menu_button = document.getElementById("menu_button");
const menu_button_exit = document.getElementById("menu_button_exit");
const nav = document.getElementById("nav_menu");

var head = document.getElementsByTagName("HEAD")[0];
var link = document.createElement("link");

link.rel = "stylesheet";
link.href = "../css/nav.css"


menu_button.addEventListener("click", function onClick(event){
    if (nav.classList.contains("hide")){
        nav.classList.remove("hide")
    }
    nav.classList.toggle("show");
});

menu_button_exit.addEventListener("click", function onClick(event){
    nav.classList.remove("show");
    nav.classList.toggle("hide");
});


