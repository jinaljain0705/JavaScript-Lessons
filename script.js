"use strict";

// Basic utilities

const PI = Math.PI;

/**
 * Return a greeting for a name (defaults to "World").
 */
function greet(name = "World") {
  return `Hello, ${name}!`;
}

/**
 * Simple arithmetic helpers
 */
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

/**
 * Sum values in an array.
 */
const sumArray = (arr = []) => {
  return arr.reduce((s, x) => s + x, 0);
};

/**
 * Generate an inclusive range array: range(1,4) -> [1,2,3,4]
 */
function range(start, end, step = 1) {
  const out = [];
  if (step === 0) throw new Error("step must not be 0");
  const increasing = start <= end;
  if ((increasing && step < 0) || (!increasing && step > 0)) step = -step;
  if (increasing) {
    for (let i = start; i <= end; i += step) out.push(i);
  } else {
    for (let i = start; i >= end; i += step) out.push(i);
  }
  return out;
}

/**
 * Iterative factorial (returns 1 for 0)
 */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0)
    throw new Error("n must be a non-negative integer");
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

/**
 * Small async helper to wait
 */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Minimal JSON fetch helper. In environments without global fetch this will throw.
 */
async function fetchJson(url, options) {
  if (typeof fetch !== "function") {
    throw new Error("fetch is not available in this environment");
  }
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

// Example usage when run directly
if (typeof require !== "undefined" && require.main === module) {
  console.log(greet()); // Hello, World!
  console.log("Add 2 + 3 =", add(2, 3));
  console.log("Multiply 4 * 5 =", multiply(4, 5));
  console.log("Sum [1,2,3] =", sumArray([1, 2, 3]));
  console.log("Range 1..5 =", range(1, 5));
  console.log("5! =", factorial(5));
  // wait(500).then(() => console.log("Waited 500ms"));
}
