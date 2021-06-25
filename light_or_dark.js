function dark(){
    document.documentElement.style.setProperty('--bg-light-or-dark', "#333333");
    document.documentElement.style.setProperty('--ft-light-or-dark', "#666666");
    document.documentElement.style.setProperty('--im-light-or-dark', "opacity(50%)");
    document.getElementById("body").style.background = "#252525";
    document.getElementById("dqh").src = "../img/dqh_dark.png";
}

function light() {
    document.documentElement.style.setProperty('--bg-light-or-dark', "#f8f9fb");
    document.documentElement.style.setProperty('--ft-light-or-dark', "black");
    document.documentElement.style.setProperty('--im-light-or-dark', "opacity(100%)");
    document.getElementById("body").style.background = "white";
    document.getElementById("dqh").src = "../img/dqh.png";
}