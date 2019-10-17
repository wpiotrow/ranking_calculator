var combo_home = document.getElementById("combo-home");
var combo_away = document.getElementById("combo-away");
var home_pts = document.getElementById("home_pts");
var away_pts = document.getElementById("away_pts");

function home_select()
{
    if(combo_home.value === "BEL") {
        home_pts.innerHTML = 1752 }
    else if(combo_home.value === "FRA") {             home_pts.innerHTML = 1725 }
    else if(combo_home.value === "ENG")
        home_pts.innerHTML = 1662
    else if(combo_home.value === "POR")
        home_pts.innerHTML = 1643
    else if(combo_home.value === "SPA")
        home_pts.innerHTML = 1631
    else if(combo_home.value === "CRO")
        home_pts.innerHTML = 1625
}

function away_select()
{
    if(combo_away.value === "BEL") {
        away_pts.innerHTML = 1752 }
    else if(combo_away.value === "FRA") {             away_pts.innerHTML = 1725 }
    else if(combo_away.value === "ENG")
        away_pts.innerHTML = 1662
    else if(combo_away.value === "POR")
        away_pts.innerHTML = 1643
    else if(combo_away.value === "SPA")
        away_pts.innerHTML = 1631
    else if(combo_away.value === "CRO")
        away_pts.innerHTML = 1625
}