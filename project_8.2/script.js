/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:Amit Jaggernauth
  Date:12/13/2025
  Filename:project_8.2
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A skilled thief is given a chance at redemption if he can successfully perform inception."
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    synopsis: "A hacker discovers the shocking truth about reality and his role in the war against machines."
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis: "A team of explorers travel through a wormhole in space to ensure humanity's survival."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found. Please try another title.");
      }
    }, 1000); // simulate 1 second delay
  });
}

async function displayMovie(event) {
      event.preventDefault(); // prevent form reload
      const titleInput = document.getElementById("movie-title").value;
      const movieInfoDiv = document.getElementById("movie-info");
      movieInfoDiv.innerHTML = "<p>Loading...</p>";

      try {
        const movie = await fetchMovie(titleInput);
        movieInfoDiv.innerHTML = `
          <div class="movie-title">${movie.title}</div>
          <div class="movie-details"><strong>Director:</strong> ${movie.director}</div>
          <div class="movie-details"><strong>Release Year:</strong> ${movie.year}</div>
          <div class="movie-synopsis">${movie.synopsis}</div>
        `;
      } catch (error) {
        movieInfoDiv.innerHTML = `<p class="error">${error}</p>`;
      }
    }


document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  
});