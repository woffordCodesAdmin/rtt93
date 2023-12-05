let questions = [
  "1. Write a JavaScript function that reverses a number.",
  "Write a JavaScript function that checks whether a passed string is a palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.",
  "Write a JavaScript function that returns a string that has letters in alphabetical order.",
  "Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.",
  "Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.",
  " Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.",
  " Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.Sample array : [1,2,3,4,5] Expected Output : 2,4",
  "Write a JavaScript function to get the number of occurrences of each letter in a specified string.",
  "Write a JavaScript function that returns array elements larger than a number.",
  "Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments'w3resource.com', 'o' Expected output : 2",
  "Write a JavaScript function to find the first not repeated character.",
];
let students = [
"MOULOUD CHABOUNI",
"MARIAN Rahman",
"Gloria Audige",
"Carmen Tejeda",
"Daniel Sapele",
"Moon Chu",
"Tesean Ferguson",
"Affaf Taouti",
"Jorge Robayo",
"Michael Higgins",
"Emanuel Leon-Vargas",
"Emmanuel Efuwape",
"Susan Whiteford",
"Joshua Vogel",
"Meena Suresh",
"Suneetha Gopu",
"Nureddyn Ballout",
"Deandre Byrd",
"Abdulrahman Alkout",
"Pranusha Pothugunta"
]

let screen = document.querySelector(".studentRando");
let qStage = document.querySelector(".interviewContainer");

const chooseStudent = () => {
  let randomNum = Math.floor(Math.random() * (19 - 0) + 0);
  screen.innerHTML = students[randomNum];
};

const chooseQuestion = () => {
  let randomNum = Math.floor(Math.random() * (10 - 0) + 0);
  qStage.innerHTML = questions[randomNum];
};

const startRound = () => {
  chooseStudent();
  chooseQuestion();
};

const disappear = (num) =>{
let option = document.querySelector(`.helper${num}`)
option.remove()
}
const studentPoints = () =>{
    students.map((x)=>{
        let main = document.querySelector('body')
        let kid = document.createElement('div')
        kid.setAttribute('class','kidd')
        kid.addEventListener('click',()=>{
            kid.remove()
        })
        kid.innerHTML = x
        main.append(kid)
    })
}

const shuffleQuestion = () =>{
    let shaker = document.querySelector('.ngneer')
    shaker.setAttribute('src','https://media.tenor.com/9UIuau2Gf5EAAAAC/dog-bartender.gif')
    chooseQuestion();
    disappear('4')
}