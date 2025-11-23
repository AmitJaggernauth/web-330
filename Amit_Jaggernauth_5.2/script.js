/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:Amit Jaggernauth
  Date:11/23/2025
  Filename:Amit_Jaggernauth_5.2
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false }

];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const table = tables.find(t => t.tableNumber === parseInt(tableNumber));

  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  if (table.isReserved) {
    callback(`❌ Table ${tableNumber} is already reserved.`);
  } else {
    table.isReserved = true;
    setTimeout(() => {
      callback(`✅ Reservation confirmed for Table ${tableNumber}.`);
    }, time);
  }

}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    const name = document.getElementById("name").value;
  const tableNumber = document.getElementById("table").value;

  reserveTable(tableNumber, (message) => {
    document.getElementById("message").textContent = `${name}, ${message}`;
  }, 2000); // 2 seconds delay

  });
