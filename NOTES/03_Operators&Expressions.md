// ===============================================
# //** INCREMENT (++) AND DECREMENT (--) NOTES**
// ===============================================

// The operators ++ and -- are called:
// 1) Increment operator (++) → adds 1
// 2) Decrement operator (--) → subtracts 1

// VERY IMPORTANT:
// There are TWO types of increment/decrement:
// 1) Post version  → x++  or  x--
// 2) Pre version   → ++x  or  --x

// ------------------------------------------------
// MAIN DIFFERENCE BETWEEN PRE AND POST
// ------------------------------------------------

// POST VERSION (x++ or x--)
 --------------------------------
// Meaning: "Use the value first, then change it."

// Example:
// let x = 5;
// console.log(x++);

// What happens step by step:
// 1) JavaScript prints the CURRENT value (5)
// 2) Then it increases x by 1
// 3) Now x becomes 6 internally

// So post-increment:
// x++ → use first, then increase
// x-- → use first, then decrease


// PRE VERSION (++x or --x)
// --------------------------------
// Meaning: "Change the value first, then use it."

// Example:
// let x = 5;
// console.log(++x);

// What happens step by step:
// 1) JavaScript first increases x (5 → 6)
// 2) Then it prints the new value (6)

// So pre-increment:
// ++x → increase first, then use
// --x → decrease first, then use


// ------------------------------------------------
// IMPORTANT RULE TO REMEMBER FOREVER
// ------------------------------------------------

// x++  → print/use current value → then add 1
// ++x  → add 1 first → then print/use

// x--  → print/use current value → then subtract 1
// --x  → subtract 1 first → then print/use


// ------------------------------------------------
// EXAMPLE WITH INCREMENT (++)
// ------------------------------------------------

let x = 5;

console.log(x++);  
// Prints 5 (use first), then x becomes 6

console.log(++x);  
// x was 6
// First increase → x becomes 7
// Then print 7


// ------------------------------------------------
// EXAMPLE WITH DECREMENT (--)
// ------------------------------------------------

let y = 10;

console.log(y--);
// Prints 10 (use first), then y becomes 9

console.log(--y);
// y was 9
// First decrease → y becomes 8
// Then print 8


// ------------------------------------------------
// VISUAL MEMORY TRICK
// ------------------------------------------------

// POST (x++ or x--)
// Think: "Give value now, change later"

// PRE (++x or --x)
// Think: "Change now, give value after"


// ------------------------------------------------
// PROFESSIONAL TIP
// ------------------------------------------------

// To avoid confusion in real projects,
// do NOT mix increment/decrement inside console.log.

// Instead of:
// console.log(x++);

// Write:
// x++;
// console.log(x);

// This makes the code clearer and avoids mistakes.
