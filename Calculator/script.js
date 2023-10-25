//whenver I click any btn it should display in input tag


let calculation = "";
const equal = document.querySelector('.calc-btn-equal')
console.log(equal);

const buttons = document.querySelectorAll('#buttons , calc-btn')


// const display = document.querySelector('display')

// buttons.forEach(box => {
//   buttons.addEventListener('click', function () {
//     display.innerHTML ='hello'
//   });
// });


equal.addEventListener('click',function (event) {
  console.log(eval(calculation));  
})
