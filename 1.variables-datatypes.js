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
--- JavaScript Execution Context and Variables ---

How Variables Work in the Browser (Conceptual Explanation for Diagram):

When JavaScript code runs in a browser, it operates within an **Execution Context**.
Think of an execution context as the environment where JavaScript code is evaluated and executed.
There are two main types of execution contexts:

1.  **Global Execution Context (GEC):** The default context where code starts executing. For browsers, this is typically the `window` object.
2.  **Function Execution Context (FEC):** Created whenever a function is called.

The JavaScript engine uses a **Call Stack** to manage these execution contexts. The GEC is at the bottom of the stack. When a function is called, a new FEC is created and pushed onto the stack. When the function finishes, its FEC is popped off the stack.

Each Execution Context has several components, but the most relevant for variables are:

-   **Variable Environment:** Holds variables declared with `var` and function declarations.
-   **Lexical Environment:** Introduced in ES6, this holds variables declared with `let`, `const`, and function declarations. It also has a reference to the outer (parent) lexical environment, forming a scope chain.

The creation and execution of an execution context happen in two phases:

**Phase 1: Creation Phase**

When the JavaScript engine encounters an execution context (either the GEC when the script starts, or an FEC when a function is called), it performs the following steps:

a.  **Creation of the Variable/Lexical Environment:** The environment is set up.
b.  **Hoisting:** The engine scans the code for variable and function declarations:
    -   For `var` declarations: The variable name is added to the **Variable Environment** and initialized with the value `undefined`. This is why you can access `var` variables before declaration, but their value is `undefined`.

        *Diagram Concept:* In the Variable Environment box, you'd see `variableName: undefined` for all `var`s declared in that context.

    -   For `let` and `const` declarations: The variable name is added to the **Lexical Environment**, but they are **not initialized**. They are in a **Temporal Dead Zone (TDZ)**. Accessing them before the declaration line results in a `ReferenceError`.

        *Diagram Concept:* In the Lexical Environment box, you'd see `variableName: <uninitialized>` or similar, perhaps with a note about the TDZ, for all `let`s and `const`s.

    -   For function declarations (`function myFunction() {}`): The function name is added to the **Variable Environment (and Lexical Environment)** and is fully stored in memory, allowing you to call function declarations before their definition in the code.

        *Diagram Concept:* In the Variable Environment/Lexical Environment, you'd see `myFunction: <function code>`. The actual function code is also stored in memory, and the environment holds a reference to it.

    -   Function expressions (`var myFunction = function() {}`) behave like `var` variables; only the variable `myFunction` is hoisted and initialized to `undefined` in the Variable Environment.

c.  **Setting up the Scope Chain:** The Lexical Environment gets a reference to its outer lexical environment, linking it up the chain to the global environment. This chain is how the engine looks for variables when they are not found in the current scope.

    *Diagram Concept:* Draw arrows from the current Lexical Environment box pointing to the outer Lexical Environment box, and so on, up to the Global Lexical Environment.

**Phase 2: Execution Phase**

After the creation phase, the engine executes the code line by line:

a.  **Variable Assignments:** When a line with a variable assignment is reached (e.g., `variableName = value;`),
    -   For `var`: The variable in the **Variable Environment** is updated with the assigned value.
    -   For `let` and `const`: The variable in the **Lexical Environment** moves out of the TDZ and is initialized/assigned the value. For `const`, this is the only assignment allowed.

    *Diagram Concept:* In the Variable/Lexical Environment box, update `undefined` or `<uninitialized>` to the actual value.

b.  **Code Execution:** Other lines of code, like function calls, `console.log`, etc., are executed.

**Diagramming the Execution Context and Variables:**

For a simple script or function call, you could draw boxes representing the Call Stack. Inside the topmost box (the current Execution Context), draw two sub-boxes for the Variable Environment and Lexical Environment. List the variables (`var`, `let`, `const`, function names) inside the appropriate environment box, showing their state (`undefined`, `<uninitialized>`, or assigned value) during both the Creation and Execution phases. Draw arrows to represent the scope chain from the Lexical Environment.

**Example Visualization:**

Consider this code:

```javascript
var a = 10;
let b = 20;
const c = 30;

function showVars() {
  var x = 100;
  let y = 200;
  console.log(a, b, c, x, y);
}

showVars();
```

*   **Global Execution Context (Creation Phase):**
    *   Call Stack: [GEC]
    *   Global Environment:
        *   Variable Environment: `a: undefined`, `showVars: <function code>`
        *   Lexical Environment: `b: <uninitialized>`, `c: <uninitialized>`, `showVars: <function code>`

*   **Global Execution Context (Execution Phase):**
    *   Line `var a = 10;`: Variable Environment: `a: 10`
    *   Line `let b = 20;`: Lexical Environment: `b: 20` (exits TDZ)
    *   Line `const c = 30;`: Lexical Environment: `c: 30` (exits TDZ)
    *   Line `showVars();`: A new FEC is created and pushed onto the stack.

*   **Function Execution Context for `showVars` (Creation Phase):**
    *   Call Stack: [GEC, FEC_showVars]
    *   Function Environment (for `showVars`):
        *   Variable Environment: `x: undefined`
        *   Lexical Environment: `y: <uninitialized>`, Outer Environment: Global Lexical Environment

*   **Function Execution Context for `showVars` (Execution Phase):**
    *   Line `var x = 100;`: Variable Environment: `x: 100`
    *   Line `let y = 200;`: Lexical Environment: `y: 200` (exits TDZ)
    *   Line `console.log(...)`: Engine looks for `a`, `b`, `c` up the scope chain in the Global Lexical Environment.
    *   Function finishes: FEC_showVars is popped off the stack.

This detailed breakdown of the phases and environments should provide a strong basis for visualizing or drawing the execution context and how variables are managed within it.
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

/*
Mutability and Immutability:

Mutability refers to whether the value of a data type can be changed after it is created.
- Mutable: Can be changed after creation.
- Immutable: Cannot be changed after creation. Any operation that seems to modify an immutable value actually creates a new value.

This is a key distinction, especially when passing values around or assigning variables.
*/

// --- Immutable Datatypes (Primitives) ---
/*
All primitive datatypes are immutable:
- string
- number
- boolean
- null
- undefined
- symbol
- bigint

When you perform an operation that seems to change a primitive value, a *new* value is created.
The original value remains unchanged.
*/

// Example with string:
let originalString = "Hello";
let modifiedString = originalString.toUpperCase(); // toUpperCase() returns a NEW string

console.log("Original String:", originalString); // Output: Hello (original is unchanged)
console.log("Modified String:", modifiedString); // Output: HELLO (new string created)

// Example with number:
let originalNumber = 10;
let modifiedNumber = originalNumber + 5; // Addition creates a NEW number

console.log("Original Number:", originalNumber); // Output: 10 (original is unchanged)
console.log("Modified Number:", modifiedNumber); // Output: 15 (new number created)

// Example with boolean:
let isTrue = true;
// There aren't direct methods to change a boolean value, but reassignment shows immutability
isTrue = false; // Reassigning the variable, not changing the original 'true' value
console.log("Boolean after reassignment:", isTrue); // Output: false


// --- Mutable Datatypes (Non-Primitives/References) ---
/*
Non-primitive datatypes are mutable:
- object
- array
- function (though usually treated functionally, their properties can be modified)

When you modify a mutable value, you are changing the *contents* of the data structure
that the variable is referencing in memory.
If multiple variables reference the same mutable object/array, changing it through one
variable will be reflected when accessed through the other.
*/

// Example with object:
let originalObject = { value: 10 };
let referenceToObject = originalObject; // Both variables reference the SAME object

console.log("Original Object before change:", originalObject); // Output: { value: 10 }
console.log("Reference Object before change:", referenceToObject); // Output: { value: 10 }

referenceToObject.value = 20; // Modifying the object through the reference

console.log("Original Object after change:", originalObject); // Output: { value: 20 } (It changed!)
console.log("Reference Object after change:", referenceToObject); // Output: { value: 20 }

// If you reassign the reference variable, it points to a NEW object, the original remains.
referenceToObject = { newValue: 30 };
console.log("Original Object after reference reassignment:", originalObject); // Output: { value: 20 } (Unchanged)
console.log("Reference Object after reference reassignment:", referenceToObject); // Output: { newValue: 30 } (Points to new object)

// Example with array:
let originalArray = [1, 2, 3];
let referenceToArray = originalArray; // Both variables reference the SAME array

console.log("Original Array before change:", originalArray); // Output: [ 1, 2, 3 ]
console.log("Reference Array before change:", referenceToArray); // Output: [ 1, 2, 3 ]

referenceToArray.push(4); // Modifying the array through the reference

console.log("Original Array after change:", originalArray); // Output: [ 1, 2, 3, 4 ] (It changed!)
console.log("Reference Array after change:", referenceToArray); // Output: [ 1, 2, 3, 4 ]

// --- Summary ---
/*
- Primitive datatypes are immutable. Operations create new values.
- Non-primitive datatypes (Objects, Arrays, Functions) are mutable. Operations change the contents in place.
- Variable assignment for primitives copies the value.
- Variable assignment for non-primitives copies the reference.
*/

/*
--- Pass by Value vs. Pass by Reference (Conceptual) ---

How values are passed to functions in JavaScript depends on whether the value is a primitive or non-primitive.
This is often discussed in terms of "Pass by Value" and "Pass by Reference", although JavaScript's handling of non-primitives is technically "Pass by Sharing".

1.  **Pass by Value (for Primitive Datatypes):**
    -   When you pass a primitive value (string, number, boolean, null, undefined, symbol, bigint) to a function, a *copy* of the actual value is passed.
    -   The function works with this copied value. If the function changes the parameter's value, it only changes the copy within the function's local scope.
    -   The original variable outside the function remains unchanged.
    -   This is consistent with the immutability of primitive types.

    Example (same as Problem 8, but with detailed explanation):
    */
   function changePrimitive(value) {
     console.log("Inside function (before change) - value:", value); // value is a copy
     value = 200; // Changes only the local copy of 'value' inside the function
     console.log("Inside function (after change) - value:", value); // Output: 200
   }

   let originalNum = 100;
   console.log("Outside function (before call) - originalNum:", originalNum); // Output: 100

   changePrimitive(originalNum); // Passing the value 100 (a copy is made)

   console.log("Outside function (after call) - originalNum:", originalNum); // Output: 100 (Original remains unchanged)
   /*

2.  **Pass by Reference for Objects/Arrays (Pass by Sharing):**
    -   When you pass a non-primitive value (object, array, function) to a function, a *copy of the reference* (memory address) to the object/array in the heap is passed.
    -   The function receives this copied reference, which points to the *same* object/array in memory as the original variable.
    -   If the function modifies the *contents* of the object/array using this reference (e.g., changing a property, adding an element to an array), the changes will affect the original object/array because both the original variable and the function parameter are pointing to the same location in memory.
    -   However, if the function *reassigns* the parameter to a *new* object or array, this only changes the local copy of the reference inside the function. The original variable still points to the initial object/array.
    -   This behavior is a consequence of how non-primitive types are stored and referenced.

    Example (same as Problem 8, but with detailed explanation):
    */
   function changeObject(obj) {
     console.log("Inside function (before change) - obj:", obj); // obj is a copy of the reference
     obj.value = 200; // Modifies the object in memory that the reference points to
     console.log("Inside function (after content change) - obj:", obj); // Output: { value: 200 }

     // Reassigning the parameter to a NEW object
     obj = { newValue: 300 }; // Changes only the local reference inside the function
     console.log("Inside function (after reassignment) - obj:", obj); // Output: { newValue: 300 }
   }

   let originalObj = { value: 100 };
   console.log("Outside function (before call) - originalObj:", originalObj); // Output: { value: 100 }

   changeObject(originalObj); // Passing a copy of the reference to originalObj

   console.log("Outside function (after call) - originalObj:", originalObj); // Output: { value: 200 } (The original object was modified)
   /*

--- Summary ---
-   Primitives are **Passed by Value**: A copy of the value is passed. Changes inside the function do not affect the original variable.
-   Non-Primitives (Objects/Arrays) are **Passed by Sharing/Reference**: A copy of the reference is passed. Changes to the object's *contents* inside the function *do* affect the original object. Reassigning the parameter inside the function *does not* affect the original variable.
*/
