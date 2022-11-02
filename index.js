"use strict";

window.onload = "init";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
   
    ];

    function dropMenuBtn()
    {
       let dropMenuBtn = document.getElementById("dropMenuBtn");
       document.getElementById("teamInfo").value = dropMenuBtn.li[dropMenuBtn.selectedIndex].text;
    }