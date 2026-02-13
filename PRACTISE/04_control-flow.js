// CONDITIONAL STATEMENTS
// 1- if Statement
let age = 20;
if (age >= 18) {
    console.log ("You are an Adult");
}

// 2- if else statement
let marks = 95;
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 3- else if LADDER (multiple conditions)
let temp = 28;
if (temp > 35) {
    console.log("very hot");
} else if (temp > 25) {
    console.log("warm");   //as soon as one condition is true, JS stops checking further.
} else if (temp > 15) {
    console.log("cool");
} else {
    console.log("cold");
}

// 4- NESTED if else (IF inside IF)
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome Admin");
    } else {
        console.log("Welcome User");
    }
}

// 5- TRUTHSY & FALSY VALUES
// a- falsy values
let myName = "";
if (myName) {
    console.log("name exists");
} else {
    console.log("no name");
}

// b- truthsy values
let myRealName = "Guni";
if (myRealName) {
    console.log("name exists");
} else {
    console.log("no name");
}
