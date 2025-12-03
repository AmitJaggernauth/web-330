"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Amit Jaggernauth
      Date:  12/1/2025 

      Filename: project11-02.js
*/
"use strict";

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
 
}

window.addEventListener("DOMContentLoaded", () => {
  const country = document.getElementById("country");
  const postalCode = document.getElementById("postalCode");
  const place = document.getElementById("place");
  const region = document.getElementById("region");

  // Trigger lookup when the postal code field loses focus
  postalCode.onblur = function () {
    // a. Read values
    const codeValue = postalCode.value.trim();
    const countryValue = country.value.trim();

    // b. Clear previous results
    place.value = "";
    region.value = "";

    // Quick guard: do nothing if postal is empty
    if (!codeValue || !countryValue) return;

    // c. Fetch from the API
    const url = `http://api.zippopotam.us/${encodeURIComponent(countryValue)}/${encodeURIComponent(codeValue)}`;

    fetch(url)
      // d. Parse JSON if the response is OK; otherwise throw for catch
      .then((response) => {
        if (!response.ok) {
          // This ensures rejected promise for non-200 status (e.g., 404 for unknown postal)
          throw new Error(`Lookup failed: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      // e. Extract place name and state abbreviation using bracket notation
      .then((json) => {
        // The API returns an array in json.places; we use the first entry
        const firstPlace = json.places && json.places[0];
        if (!firstPlace) {
          throw new Error("No places found for the provided postal code.");
        }

        // Use bracket notation for properties with spaces
        const placeName = firstPlace["place name"] || "";
        const stateAbbr =
          // US uses "state abbreviation"; some countries use "state" differently or not at all
          firstPlace["state abbreviation"] ||
          firstPlace["state"] ||
          "";

        place.value = placeName;
        region.value = stateAbbr;
      })
      // f. Log any errors
      .catch((err) => {
        console.error(err);
      });
  };
});
