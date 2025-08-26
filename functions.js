function myFunc(theObject) {
  console.log(theObject);
  theObject.make = 'Toyota';
  theObject.date = '29th dec 1998';
}

const myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
};

console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);


// currying function

function x(a) {
  return function (b) {
    return a * b
  }
}

console.log(x(5)(8))

// nested function

function add (a, b) {
  function mult (x) {
    return x * 2
  }

  return mult(a) + mult(b)
}

console.log(add(3.5, 4.8))


// Multi nested function

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); 


const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

var conv = []

materials.map((material, index) => {
    // console.log(material.toUpperCase(), index);
    // console.log(material.toLowerCase(), index);
    // console.log((material.slice(0, 1)).toLowerCase() + (material.slice(1, material.length)).toUpperCase(), index);
    conv.push((material.slice(0, 1)).toLowerCase() + (material.slice(1, material.length)).toUpperCase())
});

console.log(conv);



// ===== 1. ADDING / REMOVING ELEMENTS =====
let arr = [1, 2];
arr.push(3); // Add to end
console.log("push:", arr); // [1, 2, 3]

arr.pop(); // Remove from end
console.log("pop:", arr); // [1, 2]

arr.unshift(0); // Add to start
console.log("unshift:", arr); // [0, 1, 2]

arr.shift(); // Remove from start
console.log("shift:", arr); // [1, 2]

// ===== 2. FINDING ELEMENTS =====
console.log("indexOf:", [1, 2, 3].indexOf(2)); // 1
console.log("includes:", [1, 2, 3].includes(2)); // true
console.log("find:", [5, 12, 8].find(n => n > 10)); // 12
console.log("findIndex:", [5, 12, 8].findIndex(n => n > 10)); // 1

// ===== 3. LOOPING & TRANSFORMING =====
[1, 2, 3].forEach(n => console.log("forEach:", n * 2));
// 2, 4, 6

console.log("map:", [1, 2, 3].map(n => n * 2)); // [2, 4, 6]
console.log("filter:", [1, 2, 3, 4].filter(n => n % 2 === 0)); // [2, 4]
console.log("reduce:", [1, 2, 3, 4].reduce((sum, n) => sum + n, 0)); // 10

// ===== 4. SORTING & REVERSING =====
console.log("sort:", [3, 1, 2].sort()); // [1, 2, 3]
console.log("reverse:", [1, 2, 3].reverse()); // [3, 2, 1]

// ===== 5. COMBINING & SLICING =====
console.log("concat:", [1, 2].concat([3, 4])); // [1, 2, 3, 4]
console.log("slice:", [1, 2, 3, 4].slice(1, 3)); // [2, 3]

let spliceArr = [1, 2, 3];
spliceArr.splice(1, 1, 99); 
console.log("splice:", spliceArr); // [1, 99, 3]

// ===== 6. STRING CONVERSIONS =====
console.log("join:", ['a', 'b', 'c'].join('-')); // "a-b-c"
console.log("toString:", [1, 2, 3].toString()); // "1,2,3"


// ===== 1. ARRAY DESTRUCTURING =====
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"

// Skip items
const [, , thirdColor] = colors;
console.log(thirdColor); // "blue"

// Default values
const [p, q, r = "yellow"] = ["black", "white"];
console.log(p, q, r); // "black" "white" "yellow"

// ===== 2. OBJECT DESTRUCTURING =====
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // "Alice"
console.log(age);  // 25

// Rename variables
const { name: fullName } = person;
console.log(fullName); // "Alice"

// Default values
const { city = "Unknown" } = person;
console.log(city); // "Unknown"

// ===== 3. NESTED DESTRUCTURING =====
const user = {
  id: 1,
  profile: {
    username: "john_doe",
    email: "john@example.com"
  }
};
const { profile: { username, email } } = user;
console.log(username); // "john_doe"
console.log(email);    // "john@example.com"

// ===== 4. DESTRUCTURING IN FUNCTION PARAMETERS =====
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greet(person); // Hello Alice, you are 25 years old.

// ===== 5. ARRAY + OBJECT COMBO =====
const students = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Jerry" }
];
const [{ name: firstStudentName }, { name: secondStudentName }] = students;
console.log(firstStudentName, secondStudentName); // "Tom" "Jerry"









