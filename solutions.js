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
// 1.
function isTrue(n) {
    return n === true;
}

// 2.
function isFalse(n) {
    return n === false;
}

// 3.
function  not(n) {
    return !n
}

// 4.
function addOne(n) {
    n = parseFloat(n);
    return n + 1;
}

// 5.

function isEven(n) {
    return n % 2 === 0;
}

// 6.
function  isIdentical(a,b) {
    return a === b;
}

// 7.
function isEqual(a,b) {
    return a == b;
}

// 8.
function or(a,b) {
    return a || b;
}

// 9.

function and(a,b) {
    return a && b;
}

// 10.
function concat(a,b) {
    a = a.toString()
    b = b.toString()
    return a + b;
}