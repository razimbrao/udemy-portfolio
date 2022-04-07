function openNav(){
    var nav = document.getElementById("navigation");
    if (nav.className === "navigation") {
        nav.className += " menujs";
        document.getElementById("menu-icon").innerHTML = "&Cross;";
    }else{
        nav.className = "navigation";
        document.getElementById("menu-icon").innerHTML = "&#9776;";
    }
}
