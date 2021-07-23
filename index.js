// var readlineSync = require ("readline-sync");
// var score = 0;
// var chalk = require ("chalk");
// var highScore = [{
//  name: "akash",
//  score:10,},  {
//    name:"ashi",
//    score:10,
 
// }]
// var userName = readlineSync.question("what is your name? ");
// console.log(chalk.yellow("welcome " + userName , "lests see how well do you know FRIENDS!"));

// function play(question, answer) {
//   var userAnswer = readlineSync.question (question);
//  if (userAnswer === answer)
//   {
//    console.log("you are right");
//    score = score + 1;
//  }
//   else
//    {
//    console.log(" you are wrong");
//    score = score;
//  }
//   {
//    console.log("your sore is:" + score);
//   }
// }         
// var questionBank = [ 
//   questionOne = {question:"was phoebe secerately married to a guy? ",
//   answer:"yes"} ,

//  questionTwo = {question: "how many times ross were divorced? ",
//   answer: "3"}
// ];
//  for( var i=0; i< questionBank.length; i++) {
//    var currentQuestions =( questionBank[i]);
//   play( currentQuestions.question , currentQuestions.answer);
//  }
//  console.log("final score:" , score);
//   console.log("check the high score!");
//    console.log(highScore[i]);
  
  function add( parameterOne, parameterTwo)
 { var sum = parameterOne + parameterTwo;
  return sum;
}
  var result = add(2,4);
  console.log(result);
  w