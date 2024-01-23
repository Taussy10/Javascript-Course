// String is sequence of characters
// There are three ways
// 1. BY "Double quotes"
// 2. 'BY Single quotes'
// 3.  `Template Literals: String created using backticks and we write expression in it by ${expression}`

// String are immutable: can't change
const name = "Tausif Raza"
console.log(`Hello\n${name}`);

// Important methods of String

//1. Getting index of a string
let str = "  Tausif Raza"
console.log(str[5]);
//2. Length of string also count spaces
console.log(str.length);
//3. UpperCase the string
console.log(str.toUpperCase());
//4. LowerCase the string
console.log(str.toLowerCase());
// 5. Remove the white spaces
console.log(str.trim());

//Question: Make a userName of a user
let name = prompt("Write your name without spaces")
let userName =`%${name}${name.length}` 
console.log(userName);
