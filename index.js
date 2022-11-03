"use strict";

window.onload = function()
{
  let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
    ]; 

    const teamList = document.getElementById("teamList");

    let length = teams.length;
    let team = [];
    for (let i = 0; i < length; i++)
    {
      let optSelect = document.createElement("option");

      if(teams[i].code==.name)
      {
         team.push(teams[i].name);
      }
    }
    return team;
}

   






