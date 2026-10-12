// JS-01 — Variables & Constants
// Goal: practice storing booking information with const and let.
//
// Requirements:
// - Create the customer and booking variables described in the notes.
// - Print a readable booking summary.
// - Calculate the total from ticket price and quantity.
// - Use const unless a value genuinely needs reassignment.
//
// Tip:
// Start with the input values. Do not create a second hardcoded variable
// containing the expected total.


// TODO: Add your variables below.
const CustomerName = "Swarup Diwan";
const age = 20;
const city = "Pandharpur";
const isStudent = true;
const centerName = "Pune";
const NumberofTickets = 5;
const ticketPrice = 200;
const totalPrice = NumberofTickets * ticketPrice;
const isPaid = true;

// TODO: Print the booking summary below.

console.log("BOOKING SUMMARY");
console.log(`customer Name is  ${CustomerName}.`);
console.log(`age : ${age}`);
console.log(`lives in : ${city}`);
console.log(`is a student : ${isStudent}`);
console.log(`Center name : ${centerName}`);
console.log(`Number of tickets purchased : ${NumberofTickets}`);
console.log(`Price of each ticket : ${ticketPrice}`);
console.log(`Total Price : ${totalPrice}`);
console.log(`payment status : ${isPaid}`);

