/*We Declare data*/

const quizDB = [
{ question: 'Q1: What i sthe full form o HTML',
a: "Hello to my land",
b: "Hey text markup langu",
c: "HyperText makeup languag",
d: "HyperText markup languag",
ans: 'ans4'
},

{ question: 'Q2: What is the full form CSS',
a: "Cascading syle sheet",
b: "casacdin style sheep",
c: "Cartoon syle sheet",
d: "Cascading super sheets",
ans: 'ans1'
}
]

 //We declare places where to display data
 const questions = document.querySelector('.question')
const option1  =   document.querySelector('#option1')
const option2  =    document.querySelector('#option2')
const option3  =   document.querySelector('#option3')
const option4  =    document.querySelector('#option4')
const submit   =    document.querySelector('#submit')

//for slecting radio btn li tag
const answers = document.querySelectorAll('.answer')



let questionCount = 0;

/* we put data into places whrer we want to put and which data */

const loadQuestion = () =>{
const questionList = quizDB[questionCount]
questions.innerText=questionList.question;
 option1.innerText = questionList.a; 
 option2.innerText = questionList.b; 
 option3.innerText = questionList.c; 
 option4.innerText = questionList.d; 
}

loadQuestion()

const getCheckAnswer = () => {
  let answer;
  console.log(answers); 
  answers.forEach((option) => {
    if (option.checked) {
      answer = option.id; // Store the ID of the selected answer
      return; // Exit the loop once the answer is found
    }
  });
  return answer; // Return the selected answer's ID
}



submit.addEventListener('click', function () {
  const checkedAnswer = getCheckAnswer();

  if(checkedAnswer === quizDB[questionCount].ans) {
    console.log('Correct answer!');
  } else {
    console.log('Wrong answer!');
  }

  // Move to the next question or finish the quiz
  questionCount++; // Increment the question counter for the next question
  if (questionCount < quizDB.length) {
    loadQuestion(); // Load the next question
  } else {
    // Display final score or finish message
    console.log('Quiz finished!');
  }
});


// /* if i select something and submit then You  have to display result in div right or wrong */