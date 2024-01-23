
// ()

// 1. Initialisation of loops =  let i = 0 
// 2. stopping condition =  i < 10;
// 3. updation   = i++(i = i+ 1) = increase by 1 
for (let i = 0; i < 10; i++) {
  // never put i++ otherwise first value won't be 0 it will be 1 and that's wrong
  console.log("c");
}

//1. Check what is the Value of i = 0  
//2. check the conditon is i<10 Yeah so it print value of i = 0
//3. then go to i++ = 0+1 = 1 , now value of i = 1
//4. Check what is the Value of i = 1  
//5. check the conditon is i<10 Yeah so it print value of i = 1
//6. then go to i++ = 1+1 = 2 , now value of i = 2
// and so on it will print 10 times: 0 + 9(i<10)  = 10 times executed i will say always start with i = 1 and i<=10 then it will execute 10 times

// print Hello 5 times
for (let i = 1; i <= 5; i++) {
  // never put i++ 
  console.log("Hello");
}

// Calculate sum of 1 to 5
// In this varaible sum data stores
let sum = 0
for (let i = 1; i<=5; i++) {
 sum = sum + i ;
//  whenever sum update it will give you value
 console.log("sum1 = ", sum);
}
// it will give you last sum value when loops end
console.log("sum2 = ", sum );

// loop 1 = 1
// loop 2 = 3
// loop 3 = 6
// loop 4 = 10
// loop 5 = 15

// While loop
let i = 0
while (i<5) {
i++  // while i is less than 5 increase the i by 1  and print value of i 
console.log(i);
}


// Infinite loop
// Never execute a loop the is infinite cause it occupies memory and affect on CUP perfomance
let i = 0
while (i<5) {
  // while i less than 5 code will execute and 
  // i = 0 will always greater than 5 so it will never end
  console.log("Infinte");
}


// Print all even numbers from 0 to 100
for (let i = 1; i <= 100; i++) {
 if (i%2 === 0) {
  console.log(i);
 } 
}

//TODO: Ask a user to guess a number that you created using math.random
// How to create a number 
// How to take number from user 

let guessNum = 15 
let userNum = prompt("Guess the number: ")

// 
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // Element = value of all arrays you can acces by i   
}