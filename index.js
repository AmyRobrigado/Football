"use strict";

window.onload = init;

// The array will stay global and constant
const teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];


function init() { // Initializing all the functions 
  console.log("index.js");
  fillDropdown(); // Created function
  const selectBtn = document.getElementById("selectBtn"); // Select button 
  selectBtn.onclick = selectBtnOnClick; // Initializing the select button


}

function fillDropdown() { // Initializing the dropdown menu 
  const teamSelect = document.getElementById("teamSelect"); // Identifying the select element
  let selectTeamOption = document.createElement("option"); // Creating option elements for the select menu
  selectTeamOption.value = ""; // To make sure the "Select a Team..." value is empty(?)
  selectTeamOption.textContent = "Select a Team..."; // Empty text (?)
  teamSelect.appendChild(selectTeamOption); 

  let teamsLength = teams.length; // To go through the length of the array
  for (let i = 0; i < teamsLength; i++) {
    let newOption = document.createElement("option"); // Creating html elements 
    newOption.value = teams[i].code;  
    newOption.textContent = teams[i].name;

    teamSelect.appendChild(newOption);
  }

}

function selectBtnOnClick() { // What the button will output
  const teamSelect = document.getElementById("teamSelect"); 
  let selectedTeamCode = teamSelect.value; 
  let selectedTeam = getTeamFromCode(teams, selectedTeamCode);

  let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}.`// To output a message on click
  
  const teamInfo = document.getElementById("teamInfo");
  teamInfo.innerHTML = message;
  return false; // Because the button type is a submit button, it needs to be returned as false or it will try to reload into a new pgae.
}

function getTeamFromCode(t, c) { 
  let teamscount = t.length;
  for (let i = 0; i < teamscount; i++) { 
    if (t[i].code == c) {
      return t[i];
    }
  }
  return null; // Intentional absence of any object value
}

// function selectBtnOnClick()
// {
//   const teamSelect = document.getElementById("teamSelect");
//   teamSelect.code = "DAL";

//   let length = teamSelect.options.length;
//   for (let i = 0;i < length; i++)
//   {
//     if (teamSelect.options[i].name == .code)
//   }
// }

















