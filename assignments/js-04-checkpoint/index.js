// JS-04 — Phase 0 Checkpoint
// Goal: independently combine everything learned in Phase 0.
//
// This is intentionally less guided than the previous assignments.
// Read the requirements first, then decide how to structure your code.
//
// Requirements:
// - Display customer name and age.
// - Calculate subtotal.
// - Apply discount.
// - Calculate final amount.
// - Display payment status.
// - Calculate eligibility.
// - Do not hardcode calculated outputs.
// - Do not install external packages.
//
// Test your program with more than one set of values before submitting.


// TODO: Add the provided inputs.
const CustomerName = "Swarup DIwan";
const age = 20;
const isPaid = true;
const isBanned = false;
const TicketPrice = 400;
const NumberofTickets =4;
const DiscountPercentage = 10;


// TODO: Implement the ticket calculations.
const subTotal = TicketPrice * NumberofTickets;
const DiscountAmount = (subTotal * DiscountPercentage) / 100;
const AmountToPay = subTotal - DiscountAmount;

// TODO: Implement the eligibility decision.
const isEligible = age >=18 && isPaid && !isBanned;


// TODO: Print the final booking summary.
console.log("VR DARSHAN BOOKING SUMMARY");
console.log(`-------------------------`);
console.log(`Customer Name : ${CustomerName}`);
console.log(`Age : ${age}`);
console.log(`Ticket Price : ${TicketPrice}rs`);
console.log(`Number of Tickets : ${NumberofTickets}`);
console.log(`SubTotal : ${subTotal}rs`);
console.log(`Discount Percentage : ${DiscountPercentage}%`);
console.log(`Discount Amount : ${DiscountAmount}rs`);
console.log(`Amount to be paid : ${AmountToPay}rs`);
console.log(`Eligibility status : ${isEligible}`);
console.log(`-------------------------`);
