// JS-03 — Operators
// Goal: use arithmetic, comparison, and logical operators.
//
// Requirements:
// - Calculate subtotal.
// - Apply the discount.
// - Calculate final amount.
// - Determine eligibility from age, payment, and banned status.
//
// Important:
// The final amount and eligibility must be calculated, not hardcoded.
//
// TODO: Add your input values.
const CustomerName = "Swarup DIwan";
const age = 20;
const isPaid = true;
const isBanned = false;
const TicketPrice = 400;
const NumberofTickets = 3;
const DiscountPercentage = 10;


// TODO: Add your calculations.

const subTotal = TicketPrice * NumberofTickets;
const DiscountAmount = (subTotal * DiscountPercentage) / 100;
const AmountToPay = subTotal - DiscountAmount;


// TODO: Add your eligibility logic.
const isEligible = age >=18 && isPaid && !isBanned;

console.log("BOOKING SUMMARY");
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
