// Array = index means [Square brackets]
// Non premitive data type = object basically  Array is specal type of object
// Arrays are mutable
// Method vs Property
// Method: a function that does something by doing something
//  Property: a property of something 

//  ()


// string , boolean , number
const array1 = ["Chuha" , "Billi", "Kutta", true , 58 ]
for (let i = 0; i <array1.length; i++) {
  // let i = 0 does i is less than array.lenth yeah so it will go in array1[i] and if you want to print then you can it's your choice

  // let i = 5 does 5 is less than array.length NO so it won't go in array1[i] and loop will break
  const value = array1[i];
  console.log(value); 
}
console.log("chuha");

// Find average of these numberes
const array2 = [85 , 97 , 44 , 37  , 76 , 60 ]
// Container for adding all the values of array
let sum = 0
for (let i = 0; i < array2.length; i++) {
  // For getting each value of array 
    console.log(array2[i]); 
    // put array value inside container then you will ask why did you write two times container 
    // first time container value = 0 
    //  0 = 85+0 == 85
    //  second time container value = 85
    // 85 = 85+97 = 182 and so on
    sum = array2[i] + sum
    // we made another container for storing avg
   let  avg = sum/array2.length   
      console.log(avg);  
}

// ForEach loop: it is baap of for loop only works with Array 
// value is describing each value of an array
array2.forEach(value => {
  //  console.log(array2[value]);
   console.log(value);
});

// Tell the final price after offing 10% 
// How do you make 10% off
// what is 10% 10/100*arrayValue
const array3 = [250 , 645 , 300 , 900  , 50  ]
let price ; 
array3.forEach(value => {
 let off =  10/100*value
  price = (value- off)
  console.log(price);
});


// Array methods 
const array4 = [250,645,300,900,50]
// At the last index number it will add {Stack yaad hai naa}
array4.push(15)
// 1. push method: Last index number will wipe out
array4.pop(0)
let str = array4.toString()
// 2. pop method:  It also counting , so it's an string
console.log(str.length);
console.log(array4);

// 3. slice method:  Slice methods: Returna piece of array
//  We will get value from index 1 to 3{4 won't include}

 console.log(array4.slice(1,4)); 
 
// 4. splice method:  Splice method for delete add replace
console.log(array4.splice('From which elment you want to work(a)' , "How many elments you  want to delete from a(include a) ", "Wanna add any elment if YES then it will add besides a ") ); 

console.log(array4.splice(0,5, "Chuha", "Doggy" ));

// Ques: 
const array5 = ["Bloomberg","Microsoft","Uber","Google","IBM", "Netflix"]

// unshift method to add value at 0th index
console.log(array5.unshift("Chuha"));
// 1. Remove the first company
// shift method to delete value at 0th index
// If you don't write it will only delete 0th index
console.log(array5.shift()); 
console.log(array5);

//2. Remove Uber and Add Ola in its place
array5.splice(2,1,"Ola")
console.log(array5);

// 3. Add Amazon at the end
// You can do method  shift and  but i wll do push qki man mera 
// array5.push("Amazon")
// If you want to add at particular index do this
array5[6] = "Amazon"
console.log(array5);


// Push at the end{remember by stack Data Structure} , unshift at the first
// Pop at the end{remember by stack Data Structure} , shift at the end

// filter method: To filter from an array

const array6 = [25,65,30,90,50]
// Filter the even numbers
// value is describing each value of an array
// Newarray will made and value will store there
let copyAray = array6.filter((value)=>{
  if (value%2 === 0) {
console.log(value);
  }
})

// TODO: Learn the Reduce method
// Reduce: Reduce an array to single value

// Find the sum of an array{we are reducing an array to single value}


// index1  result = 25 
// index2 = cValue = 65 , result = 25 +65 
// index3 = cValue = 30 , result = 25 +65 + 30
// Basically result act as container that store operations result but you can't log it cause it's scope ends after functionreduce methdod}  ends so you have to make nw array to get the value of funtion{reduce methdod}
// always use return keyword 
array6.reduce((result , cValue) =>{
return  result + cValue 
})


// How do we know which number is largest
// index1: reslut value = 25 
// index2: reslut value = 65 , prev=65 
// 
const largest = array6.reduce((result, cValue) => {
  return result>cValue ? result : cValue
})

console.log(largest);

// Questions
// 1. Filter marks greater than 90
const marks = [25,69,92,49,98]
const nine = marks.filter((value)=> {
 return value>90 

})
console.log(nine);

// TODO: 
// Take a number n as input from user. Create an array of numbers from 1 to n.
// 1. Use the reduce method to  calculate sum of all numbers in the array.
// 2. Use the reduce method to calculate product of all numbers in the array

//TODO: Learn more about return statement: Aakhir ye return krta hai kya