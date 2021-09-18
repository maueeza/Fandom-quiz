var readLineSync = require('readline-sync');
var userName = readLineSync.question('May I have your name? ');
console.log("Welcome "+userName+"!, to HOW MUCH DO YOU KNOW HERA PHERI and PHIR HERA PHERI! ");

var score = 0;
function play(question, opt1, opt2, opt3, answer)
{
  console.log(question);
  console.log("a. "+opt1);
  console.log("b. "+opt2);
  console.log("c. "+opt3);
  var userAns = readLineSync.question('Answer? ');
  if(userAns.toLowerCase() === answer.toLowerCase())
  {
    console.log("Right!");
    score = score + 1;
  }
  else
  {
    console.log("Wrong!")
  }

  console.log("You have scored : "+score);
  console.log("-----------------");
}

var questionOne = {
  question: "1. Who has played role of baburao in Hera pheri? ",
  option1 : "Paresh Raval",
  option2 : "Akshay Kumar",
  option3 : "Sunil Shetty",
  answer : "Paresh Raval"
}

var questionTwo = {
  question: "2. From which movie is this song : 'Dene wala jab bhi deta deta Chappar faadke? '",
  option1 : "Phir Hera Pheri",
  option2 : "Hera Pheri",
  option3 : "Dil Se",
  answer : "Hera Pheri"
}

var questionThree = {
  question: "3. For which job is character 'Shyam' shown struggling in Movie ? '",
  option1 : "Government Job",
  option2 : "Bank Job",
  option3 : "MNC Job",
  answer : "Bank Job"
}

var questionFour = {
  question: "4. What is kept in kukdookoo ? '",
  option1 : "Gold",
  option2 : "Diamonds",
  option3 : "Silver",
  answer : "Diamonds"
}

var questionFive = {
  question: "5. By which names does Akshay Kumar calls Sunil Shetty and Paresh Raval in scene of stealing drugs ? '",
  option1 : "Joker A, Joker B",
  option2 : "Joker D, Joker E",
  option3 : "Joker B, Joker S",
  answer : "Joker B, Joker S"
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(i = 0; i<questionList.length; i++)
{
  var currQuestion = questionList[i];
  play(currQuestion.question, currQuestion.option1, currQuestion.option2, currQuestion.option3, currQuestion.answer);
}

console.log("Good! Your score is : "+score);
