// JS-02 — Data Types & Type Conversion
// Goal: identify primitive values and convert input deliberately.
//
// Requirements:
// - Create examples of string, number, boolean, undefined, and null.
// - Inspect their types with typeof.
// - Treat price and quantity as strings initially.
// - Convert them before calculating the total.
// - Explain your observations in the assignment README.
//
// Important:
// Do not remove the original string inputs just because you created converted values.


// TODO: Add your type examples here.
const stringExample = "Hello Swarup";
const numberExample = 7;
const booleanExample = true;
const undefinedExample = undefined;
const nullExample = null;
const NanExample = Number("HELLO");

console.log(typeof stringExample);
console.log(typeof numberExample);
console.log(typeof booleanExample);
console.log(typeof undefinedExample);
console.log(typeof nullExample);   // This gives "object" beacause of a historical bug in JavaScript.
console.log(typeof NanExample);    // This gives "number" because NaN is a special numeric value that represents "Not-a-Number".

// TODO: Add the provided string inputs here.
const price = "200";  // Takes string input for price 
const quantity = "5"; // Takes string input for quantity

console.log (`Type of price is ${typeof price}`);
console.log (`Type of quantity is ${typeof quantity}`);
// TODO: Convert the values and calculate the total.
const priceNumber = Number(price);  // Convert price to number
console.log(`Type of priceNumber is ${typeof priceNumber}`); 

const quantityNumber = Number(quantity); // Convert quantity to number
console.log(`Type of quantityNumber is ${typeof quantityNumber}`);

const total = priceNumber * quantityNumber; 
console.log(`Total price is ${total}`);
console.log(`Type of total is ${typeof total}`);

