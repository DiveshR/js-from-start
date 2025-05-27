// JavaScript Variables and Datatypes

// Variables are containers for storing data values.

/*
Variable Declaration:
- var: Function-scoped, can be redeclared and updated. (Older way, generally avoid)
- let: Block-scoped, can be updated but not redeclared. (Preferred for variables that change)
- const: Block-scoped, cannot be redeclared or updated, must be initialized. (Preferred for variables that don't change)
*/

// --- Examples of Variable Declaration ---

// using var (function-scoped, can be redeclared/updated)
var carName = "Volvo";
console.log(carName); // Output: Volvo
var carName = "BMW"; // Redeclaration is allowed
console.log(carName); // Output: BMW
carName = "Audi"; // Updating is allowed
console.log(carName); // Output: Audi

function varScopeExample() {
  var x = 10;
  if (true) {
    var x = 20; // This refers to the same x due to function scope
    console.log("Inside if:", x); // Output: Inside if: 20
  }
  console.log("Outside if:", x); // Output: Outside if: 20
}
varScopeExample();


// using let (block-scoped, cannot be redeclared, can be updated)
let personName = "Alice";
console.log(personName); // Output: Alice
// let personName = "Bob"; // Error: Identifier 'personName' has already been declared
personName = "Charlie"; // Updating is allowed
console.log(personName); // Output: Charlie

function letScopeExample() {
  let y = 10;
  if (true) {
    let y = 20; // This is a different y due to block scope
    console.log("Inside if:", y); // Output: Inside if: 20
  }
  console.log("Outside if:", y); // Output: Outside if: 10
}
letScopeExample();


// using const (block-scoped, cannot be redeclared or updated, must be initialized)
const PI = 3.14159;
console.log(PI); // Output: 3.14159
// const PI = 3.14; // Error: Identifier 'PI' has already been declared
// PI = 3.0; // Error: Assignment to constant variable.

const person = { firstName: "John", lastName: "Doe" };
console.log(person); // Output: { firstName: "John", lastName: "Doe" }
person.firstName = "Jane"; // Modifying object properties is allowed
console.log(person); // Output: { firstName: "Jane", lastName: "Doe" }
// person = { firstName: "Jim", lastName: "Beam" }; // Error: Assignment to constant variable.


/*
Datatypes in JavaScript:
JavaScript has two main categories of datatypes:
1. Primitive Datatypes: Hold single values, immutable.
2. Non-Primitive (Reference) Datatypes: Hold collections of values or complex entities, mutable.
*/

// --- Examples of Primitive Datatypes ---

// string: sequence of characters
let greeting = "Hello, world!";
let singleQuoteString = 'JavaScript';
let templateLiteralString = `The value of PI is ${PI}`;
console.log(typeof greeting); // Output: string

// number: represents both integers and floating-point numbers
let integer = 100;
let float = 99.5;
let infinityValue = Infinity;
let notANumber = NaN; // Result of an undefined or unrepresentable mathematical operation
console.log(typeof integer); // Output: number
console.log(typeof float); // Output: number

// boolean: represents true or false
let isLearning = true;
let isFinished = false;
console.log(typeof isLearning); // Output: boolean

// null: represents the intentional absence of any object value
let car = null;
console.log(car); // Output: null
console.log(typeof car); // Output: object (This is a historical bug in JavaScript, typeof null is object)

// undefined: indicates that a variable has been declared but has not yet been assigned a value
let city;
console.log(city); // Output: undefined
console.log(typeof city); // Output: undefined

// symbol (ES6): Represents a unique identifier
const id = Symbol('unique_id');
const anotherId = Symbol('unique_id');
console.log(id === anotherId); // Output: false
console.log(typeof id); // Output: symbol

// bigint (ES11): Represents integer values larger than the maximum limit for Number
const largeNumber = 1234567890123456789012345678901234567890n;
console.log(largeNumber);
console.log(typeof largeNumber); // Output: bigint


// --- Examples of Non-Primitive (Reference) Datatypes ---

// object: A collection of key-value pairs (properties)
const student = {
  name: "Alice",
  age: 20,
  isEnrolled: true,
  courses: ["Math", "Science"] // Objects can contain other objects or arrays
};
console.log(student);
console.log(typeof student); // Output: object

// array: A special type of object used to store ordered collections of values
const colors = ["Red", "Green", "Blue"];
console.log(colors);
console.log(typeof colors); // Output: object (Arrays are objects in JavaScript)

// function: Also considered an object in JavaScript
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // Output: function (although technically an object)


/*
Type Coercion:
JavaScript is a dynamically typed language, and it can perform type coercion,
automatically converting values from one data type to another in certain operations.
This can sometimes lead to unexpected results.
*/

console.log(5 + "5");   // Output: "55" (number 5 is coerced to string "5")
console.log(10 - "5");  // Output: 5 (string "5" is coerced to number 5)
console.log("10" == 10); // Output: true (string "10" is coerced to number 10 for comparison)
console.log("10" === 10); // Output: false (Strict equality (===) does not perform type coercion)

/*
Checking Datatypes:
- typeof operator: Returns a string indicating the type of the operand.
- instanceof operator: Checks if an object is an instance of a particular class or constructor function.
- Array.isArray(): Recommended way to check if a value is an array.
*/

console.log(typeof "Hello");     // string
console.log(typeof 123);         // number
console.log(typeof true);        // boolean
console.log(typeof null);        // object (historical bug)
console.log(typeof undefined);   // undefined
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){}); // function

console.log([] instanceof Array);      // true
console.log({} instanceof Object);     // true

console.log(Array.isArray([]));     // true
console.log(Array.isArray({}));    // false

let a;
let b = null;
let c = undefined;

console.log(a);
console.log(b);
console.log(c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(null == undefined);
console.log(null === undefined);

/*
Scopes in JavaScript:
Scope determines the accessibility (visibility) of variables.

1. Global Scope: Variables declared outside any function or block. Accessible from anywhere in the code.
2. Function Scope: Variables declared with `var` inside a function. Accessible within the function.
3. Block Scope (ES6+): Variables declared with `let` or `const` inside a block ({}) like an if statement, for loop, or function. Accessible only within that block.
*/

// --- Examples of Scopes ---

// Global Scope
var globalVar = "I am global (var)";
let globalLet = "I am global (let)";
const globalConst = "I am global (const)";

console.log(globalVar);  // Accessible
console.log(globalLet);  // Accessible
console.log(globalConst); // Accessible

function scopeExample() {
  // globalVar is accessible here due to global scope and var's nature
  console.log(globalVar);

  // globalLet and globalConst are accessible here due to global scope
  console.log(globalLet);
  console.log(globalConst);

  // Function Scope (var)
  var functionVar = "I am function-scoped";
  console.log(functionVar);

  // Block Scope (let and const) within the function
  if (true) {
    let blockLet = "I am block-scoped (let)";
    const blockConst = "I am block-scoped (const)";
    console.log(blockLet); // Accessible within this block
    console.log(blockConst); // Accessible within this block
  }
  // console.log(blockLet); // Error: blockLet is not defined (outside its block)
  // console.log(blockConst); // Error: blockConst is not defined (outside its block)

  // console.log(functionVar); // Accessible within the function
}

scopeExample();

// console.log(functionVar); // Error: functionVar is not defined (outside the function)

/*
Memory Management: Primitive vs. Non-Primitive Datatypes
JavaScript manages memory automatically using a garbage collector.
Variables and their values are stored in memory differently based on their datatype.

1. Primitive Datatypes (string, number, boolean, null, undefined, symbol, bigint):
   - Stored directly in the "stack".
   - When you assign a primitive value to a variable, the actual value is stored directly in the memory space allocated for that variable.
   - When you assign one primitive variable to another, the value is copied. Changing one does not affect the other.
   - Primitive values are immutable. You can reassign the variable to a new value, but the original value itself cannot be changed.

   Example:
   let a = 10;
   let b = a; // The value 10 is copied from a to b
   console.log(a, b); // Output: 10 10

   b = 20; // Change b. a remains unchanged.
   console.log(a, b); // Output: 10 20

2. Non-Primitive (Reference) Datatypes (object, array, function):
   - Stored in the "heap".
   - The variable itself stores a "reference" or a memory address (a pointer) to the location in the heap where the actual object/array/function is stored.
   - When you assign one non-primitive variable to another, the reference (memory address) is copied, NOT the actual value.
   - Both variables then point to the *same* object/array/function in the heap.
   - Non-primitive values are mutable. You can change the properties of an object or the elements of an array without reassigning the variable.

   Example:
   let obj1 = { value: 10 }; // An object is created in the heap, obj1 holds a reference to it
   let obj2 = obj1; // The reference from obj1 is copied to obj2. Both point to the same object.
   console.log(obj1, obj2); // Output: { value: 10 } { value: 10 }

   obj2.value = 20; // Change the object through obj2. Since obj1 points to the same object, obj1 is also affected.
   console.log(obj1, obj2); // Output: { value: 20 } { value: 20 }

   // If you reassign obj2, it will point to a new object/location, and obj1 will remain unchanged.
   obj2 = { value: 30 };
   console.log(obj1, obj2); // Output: { value: 20 } { value: 30 }

   // With const:
   const arr1 = [1, 2];
   const arr2 = arr1; // Reference is copied

   arr2.push(3); // Modify the array through arr2. arr1 points to the same array.
   console.log(arr1, arr2); // Output: [ 1, 2, 3 ] [ 1, 2, 3 ]

   // arr2 = [4, 5]; // Error: Cannot reassign a const variable (cannot change the reference it holds)
*/

/*
--- JavaScript Variables, Datatypes, and Scope: Interview Problems ---

These problems cover various aspects of variables, datatypes, scope, hoisting, and memory management.
They range from basic to more advanced and tricky scenarios.

Try to solve them and explain your reasoning below each problem.
*/

// --- Basic Problems (Review) ---

/*
Problem 1: Understanding `var` and Scope

What will be the output of the console.log statements and why?
*/
function mysteryVarScope() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log("P1 Inside if:", x); // Your prediction:
  }
  console.log("P1 Outside if:", x); // Your prediction:
}
mysteryVarScope();
// Your explanation for Problem 1:
//


/*
Problem 2: Understanding `let` and Scope

What will be the output of the console.log statements and why? How is it different from Problem 1?
*/
function mysteryLetScope() {
  let y = 10;
  if (true) {
    let y = 20;
    console.log("P2 Inside if:", y); // Your prediction:
  }
  console.log("P2 Outside if:", y); // Your prediction:
}
mysteryLetScope();
// Your explanation for Problem 2:
//


/*
Problem 3: `const` with Objects

What will be the output of the console.log statement?
Explain why reassigning the entire `person` object (if uncommented) causes an error,
but changing a property within the object does not.
*/
const personObj = {
  name: "Alice"
};

personObj.name = "Bob";
console.log("P3 Person name:", personObj.name); // Your prediction:

// personObj = { name: "Charlie" }; // Uncommenting this line will cause an error. Why?

// Your explanation for Problem 3:
//


/*
Problem 4: Type Coercion

Predict the output of each console.log statement and explain the type coercion happening.
Explain the difference between `==` and `===`.
*/
console.log("P4 5 + \"5\":", 5 + "5");       // Your prediction:
console.log("P4 \"10\" - 5:", "10" - 5);      // Your prediction:
console.log("P4 true + true:", true + true);     // Your prediction:
console.log("P4 5 == \"5\":", 5 == "5");       // Your prediction:
console.log("P4 5 === \"5\":", 5 === "5");      // Your prediction:

// Your explanation for Problem 4:
//


/*
Problem 5: `null` vs `undefined`

Explain the difference between `null` and `undefined`.
What will be the output of the console.log statements?
Explain the results of the equality comparisons.
*/
let varA;
let varB = null;
let varC = undefined;

console.log("P5 varA:", varA); // Your prediction:
console.log("P5 varB:", varB); // Your prediction:
console.log("P5 varC:", varC); // Your prediction:
console.log("P5 typeof varA:", typeof varA); // Your prediction:
console.log("P5 typeof varB:", typeof varB); // Your prediction:
console.log("P5 typeof varC:", typeof varC); // Your prediction:
console.log("P5 null == undefined:", null == undefined); // Your prediction:
console.log("P5 null === undefined:", null === undefined); // Your prediction:

// Your explanation for Problem 5:
//


// --- Intermediate to Advanced Problems ---

/*
Problem 6: Hoisting and Temporal Dead Zone

Consider the following code snippets. Will they run without errors? If not, why? Predict the output if they do.

Snippet A:
console.log(hoistedVar); // Your prediction:
var hoistedVar = "I am hoisted";

Snippet B:
console.log(hoistedLet); // Your prediction:
let hoistedLet = "I am not hoisted like var";

Snippet C:
console.log(hoistedConst); // Your prediction:
const hoistedConst = "I am not hoisted like var";

Snippet D:
myFunction(); // Your prediction:
function myFunction() { console.log("Function is hoisted"); }

Snippet E:
myExpression(); // Your prediction:
var myExpression = function() { console.log("Function expression is not fully hoisted"); }
*/

// Your explanation for Problem 6:
//


/*
Problem 7: Closures and Scope Chains (Tricky)

What will be printed to the console after running this code?
*/
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("P7 var i:", i); // Your prediction:
  }, 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log("P7 let j:", j); // Your prediction:
  }, 100);
}

// Your explanation for Problem 7:
//


/*
Problem 8: Pass by Value vs Pass by Reference in Functions

Explain how primitive and non-primitive values are passed to functions in JavaScript.
What will be the output of the console.log statements?
*/
function changeValue(primitive, nonPrimitive) {
  primitive = 20; // Does this change the original 'num'?
  nonPrimitive.value = 20; // Does this change the original 'obj'?
}

let num = 10;
let obj = { value: 10 };

changeValue(num, obj);

console.log("P8 num:", num); // Your prediction:
console.log("P8 obj:", obj.value); // Your prediction:

// Your explanation for Problem 8:
//


/*
Problem 9: Deep vs. Shallow Copying (Practical/Theoretical)

Explain the difference between a shallow copy and a deep copy of an object or array.
Provide a simple code example for both.
When would you need a deep copy?
*/

// Your code for shallow copy:
//
// Your code for deep copy (consider nested structures):
//
// Your explanation for Problem 9:
//


/*
Problem 10: Tricky Type Coercion with Objects

What is the output of the following?
*/
console.log("P10 [] + {}:"); // Your prediction:
console.log("P10 {} + []:"); // Your prediction:

// Your explanation for Problem 10:
//
