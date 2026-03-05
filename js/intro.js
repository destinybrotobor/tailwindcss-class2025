/**
 * Correction the JS Tasks
 */
// // Task 1
// let name, unit, totalBill, unitPrice;

// name = prompt("Enter Customer name");
// unit = Number(prompt("Enter the number of units used"));

// // Determine the unitPrice by the unit used
// if (unit > 0 && unit <= 50) {
//     // totalBill = unit * 10; //Alternative method
//     unitPrice = 10;
// } else if (unit > 50 && unit <= 100) {
//     // totalBill = unit * 15; //Alternative method
//     unitPrice = 15;
// } else {
//     // totalBill = unit * 20; //Alternative method
//     unitPrice = 20;
// }

// totalBill = unit * unitPrice; // Remove this statement if you use the alternative method

// console.log(`Customer Name: ${name}`);
// console.log(`Unit Used: ${unit}`);
// console.log(`Total Bill : ₦${totalBill}`);

// Task 2
// const noOfPupil = 5;
// let names = [];

// for (let i = 0; i < noOfPupil; i++) {
//     names[i] = prompt(`Enter the name of pupil ${i + 1}`);
// }

// for (let i = 0; i < noOfPupil; i++) {
//     console.log(`Pupil ${i + 1}: ${names[i]}`);
// }

// Alternative to Task 2 Solution using the While Loop
// let names = Array(5);
// let i = 0;

// while (i < names.length) {
//     names[i] = prompt(`Enter the name of pupil ${i + 1}`);
//     i++;
// }

// let j = 0;
// while (j < names.length) {
//     console.log(`Pupil ${j + 1}: ${names[j]}`);
//     j++;
// }


// Task 3
// let num1, num2; // Declaring Variable For Data Collection

// // Prompting the user to enter numbers (Data Collection)
// num1 = Number(prompt("Enter First Number"));
// num2 = Number(prompt("Enter Second Number"));

// // Illustrating Data manipulation (Calculation)
// let sum = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let quotient = num1 / num2;

// // Displaying the results
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// console.log(`The difference of ${num1} and ${num2} is ${difference}`);
// console.log(`The product of ${num1} and ${num2} is ${product}`);
// console.log(`The quotient of ${num1} and ${num2} is ${quotient}`);



/**
 * =========================
 *    JavaScript Objects
 * =========================
 */

// const user = {
//     name: "Chimezie Emmanuel",
//     alias: "Wrong Capsule",
//     age: 30,
//     phone: "08012345678"
// };

// console.log(user.name);
// console.log(user.alias);
// console.log(user.age);
// console.log(user.phone);

// Creating Example of Arrays containing Objects
const users = [
    {
        name: "Chimezie Emmanuel",
        alias: "Wrong Capsule",
        age: 30,
        phone: "08012345678"
    },
    {
        name: "Precious Emmanuel",
        alias: "Precious",
        age: 30,
        phone: "08012345678"
    },
    {
        name: "Daniel Emmanuel",
        alias: "Daniel",
        age: 30,
        phone: "08012345678"
    },
    {
        name: "Kingsley Daniels",
        alias: "Josh2Funny",
        age: 30,
        phone: "08012345678"
    }
];

console.log(users[0]);



// NOTE: JSON (JavaScript Object Notation)
