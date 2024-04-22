// ()

// log, toUpperCase(), toLowerCase()
// Console{inbuilt object we are getting it from browser} is object and log is function

console.log("log is function cause we invoke(calle) by log()");

// Calling the function: function1() executing the code of function

// Giving Refrence of the function: function1() so that we can execute later

// Function helps to resuse the code again and again just you have to call it Basically It helps to follow DRY priciple which means Don't Repeat Yourself   


// TODO: do this show conosle.log how it works
// const object = {
//   objectFunction: function1() {
//     console.log("Chuha");
//   }
//   // Call the function

// }
// objectFunction.function1()


function function1() {
  console.log("Chuha");
}
function1()

// Parameters: Just an input variable: these are local Variables that works till the scope{scope bole to{ }} 
function function2(x ,n) {
  console.log(x);
  console.log(n);

 
}
// Argument: just an Output value of input varialbe 
function2("Taussy" ,10 ,);

function function3(x,y) {
  z = x+y
  // return only return one variable and return means code ends
  return z
}

function3(2,5)

// Arrow function
const sum = () => {

}

//TODO: Create a function that takes a string as an argument and returns the number of vowels in the string 

function countVowels(str) {
}

countVowels("Tausif")

// Functions: normal functions you know
// Methods: Data Structure + function e.g toUpperCase() is method cause it is use only with strings , abc.toUpperCase() , you can't use array with this method

// e.g.(2):  forEach is method cause it linked with arrys basically it only works with arrays so it is method
//  


// Callback is funtion that passed as an arument to another function

  // IT has call back function is an element
arrayName.forEach(element => {
  
});


//TODO: What are Higher Order function
// Those function takes another funtion as parameter inside them or they return another funtion as an argument
e.g: forEach  

let array = [1,2 , 155]
array.forEach(element => {
  // console.log(element);
 let num =   element * element
 console.log(num);
});

// Array Methods

// Map: Creates a new array when the some operation applied

// element is describing each element of an array
let newarr = array.map((element)=> {
   return console.log(element*element);
// retun element
})
console.log(newarr);

let nums = [67 , 52 ,39 ]
let newArr = nums.map((val) => {
  // console.log(val);
  return val
})

console.log(newArr);

// new keyword in functions: genrally when you call the function you gets
// function value and undefined but if you call a function with new keyword 
// i.e. new good() then it returns vlue of function and object of that function  
// 
function good() {
    console.log("Good Morining");
    
}