// String Methods

// length → returns the length of a string
console.log("Hello".length);

// charAt(index) → returns the character at a specific index (do not supports negative index)
console.log("Hello".charAt("Hello".length - 1));

// charCodeAt(index) → returns Unicode of character
console.log("A".charCodeAt(0));

// at(index) → modern way (supports negative index)
console.log("Hello".at(-1));

// indexOf(substring) → first occurrence position
console.log("Hello World".indexOf("o"));

// lastIndexOf(substring) → last occurrence
console.log("Hello World".lastIndexOf("o"));

// includes(substring) → checks if present
console.log("Hello".includes("ell"));

// startsWith(substring) → checks beginning
console.log("JavaScript".startsWith("Java"));

// endsWith(substring) → checks ending
// console.log("split", (("script".split("")[0]).toUpperCase() + "script".slice(1)));

console.log("JavaScript".endsWith((("script".split("")[0]).toUpperCase() + "script".slice(1))));

// slice(start, end) → extracts part
console.log("Hello".slice(1, 4));

// substring(start, end) → similar to slice (but no negative index)
console.log("Hello".substring(1, 4));

// substr(start, length) → (deprecated, but still works)
console.log("Hello".substr(1, 3));

// toUpperCase() / toLowerCase()
console.log("hello".toUpperCase());
console.log("hello".toLowerCase());

// trim() → removes spaces from start & end
console.log("   hi   ".trim());

// trimStart() / trimEnd() → remove only one side spaces
console.log("   hi   ".trimStart());
console.log("   hi   ".trimEnd());

// padStart(length, char) / padEnd(length, char) → add char in one side
console.log("5".padStart(3, "0"));
console.log("5".padEnd(3, "0"));

// 
console.log("ha".repeat(3));

// replace(replaced string, new string) → replace first match string
console.log("Hello World anWorld World".replace("World", "JS"));

// replaceAll(replaced string, new string) → replace all match string
console.log("apple apple".replaceAll("apple", "mango"));

// split(separator) → converts to array
console.log("a,b,c".split(","));

// concat(str) → joins strings
console.log("Hello".concat(" ", "World"));

// + operator also joins
console.log("Hello" + " World");












// match(regex) → matches with regex

// matchAll(regex) → returns all matches (iterator)

// search(regex) → position of regex match

// replaceAll() → multiple replacements

// localeCompare() → compares strings based on language














