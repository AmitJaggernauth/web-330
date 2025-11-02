/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:Amit Jaggernauth
  Date:11/2/2025
  Filename:Assignment_2.2
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function() { return name; },
    getGender: function() { return gender; },
    getClass: function() { return characterClass; }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById("name");
  const gender = document.getElementById("gender");
  const characterClass = document.getElementById("class");

  // TODO: Create character
  const newCharacter = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  const display = document.getElementById("characterOutput");
  display.innerHTML = `
    <h2>Your Character</h2>
    <p><strong>Name:</strong> ${newCharacter.getName()}</p>
    <p><strong>Gender:</strong> ${newCharacter.getGender()}</p>
    <p><strong>Class:</strong> ${newCharacter.getClass()}</p>
  `;
});