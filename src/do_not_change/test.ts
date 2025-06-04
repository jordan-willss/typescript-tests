import {
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
} from "../main";
import { assertEqual } from "./utils";

console.log("=== Running Tests ===");

assertEqual(name, "Alice", "name should be 'Alice'");
assertEqual(age, 30, "age should be 30");
assertEqual(isStudent, false, "isStudent should be false");

assertEqual(greet("Bob"), "Hello, Bob!", "greet should return correct greeting");
assertEqual(add(2, 3), 5, "add(2, 3) should be 5");

assertEqual(typeof city, "string", "city should be a string");
assertEqual(typeof yearOfBirth, "number", "yearOfBirth should be a number");

assertEqual(isEven(4), true, "isEven(4) should be true");
assertEqual(isEven(5), false, "isEven(5) should be false");

assertEqual(getFullName("Jane", "Doe"), "Jane Doe", "getFullName should return full name");

assertEqual(getArea(3, 4), 12, "getArea(3, 4) should be 12");
assertEqual(getArea(5, 5), 25, "getArea(5, 5) should be 25");