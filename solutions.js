"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */


// 1. Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
//
// isTrue(true)             // true
// isTrue(false)            // false
// isTrue(0)                // false
// isTrue(null)             // false
// isTrue("true")           // false
// isTrue("Banana")         // false
// isTrue([1, 2])           // false

function isTrue(input) {
    return input === true;
}

// 2. Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
//
// isFalse(false)             // true
// isFalse(true)              // false
// isFalse(0)                 // false
// isFalse(null)              // false
// isFalse("")                // false
// isFalse("Banana")          // false
// isFalse([1, 2])            // false

function isFalse(value) {
    return value === false;
}


// 3. Define a function named not that takes in any input and returns the boolean opposite of the provided input.
//
// not(false)                  // true
// not(0)                      // true
// not("")                     // true
// not(null)                   // true
// not(NaN)                    // true
// not(undefined)              // true
// not(true)                   // false
// not("something")            // false
// not(Infinity)               // false
// not(123)                    // false

function not(input){
    return !input;
}

// 4. Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
//
// addOne(0)                    // 1
// addOne(2)                    // 3
// addOne(-5)                   // -4
// addOne(5.789)                // 6.789
// addOne(Infinity)             // Infinity
// addOne("2")                  // 3
// addOne("0")                  // 1
// addOne("banana")             // NaN
// addOne(true)                 // NaN
// addOne(NaN)                  // NaN

function addOne(input) {
    return Number(input)+1;
}