/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:Amit Jaggernauth
  Date:12/05/2025
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  { name: "Gordon Ramsay", specialty: "British cuisine", weakness: "Patience", location: "London" },
  { name: "Massimo Bottura", specialty: "Italian cuisine", weakness: "Overthinking", location: "Modena" },
  { name: "Dominique Crenn", specialty: "French cuisine", weakness: "Perfectionism", location: "San Francisco" }

];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success
      resolve(chefs[0]);
      // Or simulate failure: reject("Failed to load Chef 1 data");
    }, 2000);
  });

}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate failure for demo
      reject("Failed to load Chef 2 data");
    }, 3000);
  });

}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[2]);
    }, 4000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([getChef1(), getChef2(), getChef3()])
  .then(results => {
    results.forEach((result, index) => {
      const section = document.querySelector(`#chef${index+1} .chef-info`);
      if (result.status === "fulfilled") {
        const chef = result.value;
        section.innerHTML = `
          <p><strong>Name:</strong> ${chef.name}</p>
          <p><strong>Specialty:</strong> ${chef.specialty}</p>
          <p><strong>Weakness:</strong> ${chef.weakness}</p>
          <p><strong>Location:</strong> ${chef.location}</p>
        `;
      } else {
        section.innerHTML = `<p class="error">${result.reason}</p>`;
      }
    });
  });
