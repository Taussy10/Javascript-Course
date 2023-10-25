 const form = document.querySelector('form')
    // While writing js for form we select form cause everything is inside form that's why we select form

 form.addEventListener('click',function (event) {
    // So that form can't submit automotically
    console.log(event);
 event.preventDefault();
  
 const height = Number(document.querySelector('#height').value);

 const weight=  Number(document.querySelector('#weight').value);

 const calculate = document.querySelector('#calculate')

 if(height === ' ' || height<0 || 
 isNaN(height)) {
  calculate.innerHTML =`Please give a valid height`
 } else if(weight==='' || weight<0 || isNaN(weight)) {
  calculate.innerHTML = `Please give a valid weight`
 }
 else {
  const bmi = (weight/((height*height)/1000)).toFixed(2)
  // show the result
  calculate.innerHTML=`<span>${bmi}</span>`
 }
 
//  if (calculate.innerHTML<18.6) {
//   calculate.innerHTML= `<span>  You are under </span>`
  
//  } else if(18.6>calculate.innerHTML<24.9 ) {
//   calculate.innerHTML= `<span>  You are we </span>`
//  }
//  else if (calculate.innerHTML>24.9 ){
//   calculate.innerHTML= `<span>  You are greater </span>`
// }
});



   
