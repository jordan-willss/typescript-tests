import {
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
} from "../main";
import { assertEqual } from "./utils";

console.log("=== Running Advanced Tests ===");

// Field Tests
assertEqual(typeof userId === "string" || typeof userId === "number", true, "userId should be string or number");
assertEqual(Array.isArray(roles), true, "roles should be an array");
assertEqual(typeof status, "string", "status should be a string");
assertEqual(fileAccess[1], Permission.Read, "fileAccess permission should be READ");

// Function Tests
assertEqual(combine(1, 2), 3, "combine(1, 2) should be 3");
assertEqual(combine("foo", "bar"), "foobar", 'combine("foo", "bar") should be "foobar"');

const logResult = logActivity("Alice", "logout");
assertEqual(logResult.includes("Alice") && logResult.includes("logout"), true, "logActivity should include user and action");

assertEqual(formatProduct({ id: 1, name: "Pen", price: 1.99 }), "Pen ($1.99)", "formatProduct should format correctly");

assertEqual(describeValue("hello"), "String: hello", "describeValue should detect strings");
assertEqual(describeValue(42), "Number: 42", "describeValue should detect numbers");

assertEqual(JSON.stringify(reverseArray([1, 2, 3])), JSON.stringify([3, 2, 1]), "reverseArray should reverse numbers");

// Practice Section Tests
assertEqual(describeTuple([3, "dogs"]), "You have 3 dogs.", "describeTuple should return formatted message");

const sampleProducts: Product[] = [
  { id: 1, name: "Book", price: 12 },
  { id: 2, name: "Pen", price: 3 },
];
assertEqual(getTotal(sampleProducts), 15, "getTotal should sum product prices");

assertEqual(fizzBuzz(3), "Fizz", "fizzBuzz(3) should return Fizz");
assertEqual(fizzBuzz(5), "Buzz", "fizzBuzz(5) should return Buzz");
assertEqual(fizzBuzz(15), "FizzBuzz", "fizzBuzz(15) should return FizzBuzz");
assertEqual(fizzBuzz(7), 7, "fizzBuzz(7) should return 7");

assertEqual(areSameType(42, 99), true, "areSameType for numbers should return true");
assertEqual(areSameType("hello", 123), false, "areSameType for string and number should return false");

const double = (n: number) => n * 2;
assertEqual(applyTwice(double, 3), 12, "applyTwice should apply the function twice");

console.log("=== All Advanced Tests Completed ===");
