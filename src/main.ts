// Fields (variables with types)
let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = false;

// Functions
function greet(person: string): string {
  return `Hello, ${person}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

//#region ====---------------------- PRACTICE SECTION ----------------------====

// Complete the following items according to the instructions.

// Typescript Operators (Doc): https://www.geeksforgeeks.org/typescript-operators/

// 1. Declare a variable 'city' of type string and assign any city name.
let city: string; // TODO: Assign a city name as a string

// 2. Create a variable 'yearOfBirth' of type number and assign a year.
let yearOfBirth: number; // TODO

// 3. Create a function that returns true if a number is even, false otherwise.
// Documentation: 
function isEven(num: number): boolean {
  // TODO: implement this
  return false;
}

// 4. Write a function that takes a first and last name and returns the full name.
function getFullName(first: string, last: string): string {
  // TODO
  return "";
}

// 5. Write a function that calculates the area of a rectangle.
function getArea(width: number, height: number): number {
  // TODO
  return 0;
}

// Export everything needed for testing
export {
  name,
  age,
  isStudent,
  greet,
  add,
  city,
  yearOfBirth,
  isEven,
  getFullName,
  getArea,
};

//#endregion