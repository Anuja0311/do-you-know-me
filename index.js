var readlineSync = require('readline-sync');
var username = readlineSync.question("What is your name?  ")
console.log("-----------------Welcome " + username + " -------------------")
var answer = readlineSync.question("Do You Know Me yes/no?\n\r")
if (answer === "yes") {
  console.log("....Basic quiz about me for you.....")
  var score = 0
  var sup = [
    questionOne = {
      que: 'Where is my local home? \n\r a: Indore\n\r b: Bhopal \n\r c: Damoh \n\r d: chhatarpur',
      ans: "c"
    },
    questionTwo = {
      que: "Which is myfavourite color? \n\r a: Red\n\r b: Blue\n\r c: Pink\n\r d: Yellow",
      ans: "c"
    }, questionThree = {
      que: 'What is my college? \n\r a: Scsit\n\r b: Sgsit \n\r c: Nsc \n\r d: Ips',
      ans: "a"
    },
    questionFour = {
      que: 'What is myPat Name? \n\r a: Anu\n\r b: Harry \n\r c: Sanket \n\r d: San',
      ans: "a"
    },
    questionOne = {
      que: 'Which is my Favourite Place? \n\r a: Mumbai\n\r b: Indore \n\r c: Pune \n\r d: Hydrabaad',
      ans: "b"
    }
  ]
  for (i = 0; i < sup.length; i++) {
    console.log(sup[i].que)
    var currenta = sup[i].ans
    var userinput = readlineSync.question(".....")
    if (userinput === currenta) {
      console.log("You Are Right")
      score = score + 1
    }
    else {
      console.log("You Are Wrong")
    }
  }
  if (score === 5) {
    console.log("---------------------Well Done--------------------")
  }
  else {
    console.log("You have some information about my")
  }
}
else {
  console.log(" you don't know me")
} 