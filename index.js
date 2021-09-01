var readlineSync = require ("readline-sync");
var score = 0;
var chalk = require ("chalk");

var userName = readlineSync.question("  Hello!,what is your name? ");
console.log(chalk.yellow("welcome " + userName , "lests see how well do you know FRIENDS!"));



function play(question, answer) {
  var userAnswer = readlineSync.question (question);
 if (userAnswer === answer)
  {
   console.log("you are right");
   score = score + 1;
 } 
  else
   {
   console.log(" you are wrong");
   score = score;
   console.log ("----------")
 }
  {
   console.log("your sore is:" + score);
  }
}         
var questionBank = [ 
  questionOne = {question:"Was phoebe secerately married to a guy? ",
  answer:"yes"} ,

 questionTwo = {question: "How many times ross were divorced? ",
  answer: "3"},

  questionThree = {question: "Ross is monica's __? ",
  answer: "brother"},

  questionFour = {question: "Chandler and joey are__? ",
  answer: "roommates"},

  questionFive = {question: " What is Joey's famous dialogue? ",
  answer: "how you doin"},
];
 for( var i=0; i< questionBank.length; i++) {
   var currentQuestions =( questionBank[i]);
  play( currentQuestions.question , currentQuestions.answer);
 }
 console.log("final score:" , score);
  console.log("check the high score!");
  
  
//   function add( parameterOne, parameterTwo)
//  { var sum = parameterOne + parameterTwo;
//   return sum;
// }
//   var result = add(2,4);
//   console.log(result);
  
  //array of highscore
highScore = [
    {
        username: "avi",
        point: 4
    },
   
    {
        username: "rimi",
        point: 3
    },
];
//displaying highscore
console.log(chalk.bgRed(" High Score "));
console.table(highScore);
// getting high score
var max = highScore[0].point;
for (let i = 1; i < highScore.length; i++) {
  if (highScore[i].point > max) {
    max = highScore[i].point;
  }
}
//checking if user beat the hihg score
if(score>max){
    console.log(chalk.inverse.bold("\n Congrats u beat high score \n"));
}
else{
    console.log(chalk.inverse.bold("\n Pay attention Next Time \n"));

}
