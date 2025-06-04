// Fields with complex types
let userId: number | string = 101;
let roles: string[] = ["admin", "editor"];
let status: "active" | "inactive" | "pending" = "active";

// Enum: https://www.typescriptlang.org/docs/handbook/enums.html
enum Permission {
  Read = "READ",
  Write = "WRITE",
  Execute = "EXECUTE",
}

// Tuples: https://www.w3schools.com/typescript/typescript_tuples.php
let fileAccess: [string, Permission] = ["config.json", Permission.Read];

// Function Overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

// Optional and Default Parameters
function logActivity(user: string, action: string = "login", time?: Date): string {
  return `${user} performed ${action} at ${time?.toISOString() ?? "an unknown time"}`;
}

// Interfaces: https://www.typescriptlang.org/docs/handbook/interfaces.html
interface Product {
  id: number;
  name: string;
  price: number;
}

// Arrow/lambda functions: https://www.geeksforgeeks.org/what-are-arrow-lambda-functions-in-typescript/
const formatProduct = (p: Product): string => `${p.name} ($${p.price})`;

// Type Guard (Type Narrowing): https://www.typescriptlang.org/docs/handbook/2/narrowing.html
function isString(value: any): value is string {
  return typeof value === "string";
}

function describeValue(value: string | number): string {
  if (isString(value)) {
    return `String: ${value}`;
  } else {
    return `Number: ${value}`;
  }
}

// Generics: https://www.w3schools.com/typescript/typescript_basic_generics.php
function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

//#region ====---------------------- PRACTICE SECTION ----------------------====

// 1. Create a function that accepts a tuple [number, string] and returns a formatted string.
//    Example: [2, "cats"] → "You have 2 cats."
function describeTuple(pair: [number, string]): string {
  return ""; // TODO
}

// 2. Write a function that accepts an array of Products and returns the total price.
function getTotal(products: Product[]): number {
  // TODO
  return 0;
}

// 3. Create a function that takes a number and returns "Fizz", "Buzz", "FizzBuzz", or the number based on divisibility rules.
// Divisible by 3 should return "Fizz", divisible by 5 should return "Buzz", divisible by both should return "FizzBuzz"
function fizzBuzz(num: number): string | number {
  // TODO
  return "";
}

// 4. Write a function that takes two parameters and returns true if their types match.
function areSameType(a: any, b: any): boolean {
  // TODO
  return false;
}

// 5. Create a higher-order function that takes a function and a value, and applies the function twice to the value.
function applyTwice<T>(fn: (val: T) => T, value: T): T {
  // TODO
  return value;
}

// Export everything needed for testing
export {
  userId,
  roles,
  status,
  fileAccess,
  combine,
  logActivity,
  formatProduct,
  describeValue,
  reverseArray,
  describeTuple,
  getTotal,
  fizzBuzz,
  areSameType,
  applyTwice,
  Permission,
  Product,
};

//#endregion
