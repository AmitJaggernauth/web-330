"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Amit Jaggernauth
      Date:   12/20/2025

      Filename: project12-03.js
*/
$(document).ready(function() {
  // Apply click event to all h2 inside article
  $("article > h2").click(function() {
    
    // Step 4: Declare variables
    let heading = $(this);                      // a. the clicked heading
    let list = heading.next();                  // b. next sibling (the list)
    let headingImage = heading.children("img"); // c. img inside heading

    // Step 5: Toggle list with sliding effect
    list.slideToggle(500);

    // Step 6: Change plus/minus symbol
    if (headingImage.attr("src") === "plus.png") {
      headingImage.attr("src", "minus.png");
    } else {
      headingImage.attr("src", "plus.png");
    }
  });
});


