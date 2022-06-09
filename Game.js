'use strict';
let userName = prompt("What is your Name");
alert("Welcome " + userName);
console.log("Welcome " + userName);
document.write("Welcome "+ userName);

function game(){
    //score will start at 0
    let score = 0;
    // Answer to question 1
    let anw1 = "no"
    //first question
    let questionOne = prompt("yes or no: My younger brother told me to try software development?")
if(questionOne==anw1){
    //Will add 1 to current score
    score = score + 1
    alert("Correct! Your score is:" + score)
}else{
    alert('Wrong')
}
//Answer to  question 2
let anw2 = "no"
//Second question
let questionTwo = prompt("yes or no: I Graduate HighSchool in 2006")
if(questionTwo==anw2){
    //Will add 1 to current score
    score = score + 1
    alert('Correct! Your score is:' + score)
}else{
    alert("Wrong")}
    //Answer to question three
    let anw3 = "yes"
    //Question three
    let questionThree = prompt("yes or no: One of my goals is to continue software development into the future")
    if(questionThree==anw3){
        //Will add 1 to current score
        score = score + 1
        alert('Correct! Your score is:' + score)
    }else{
        alert("Wrong")}
        //Answer to question 4
        let anw4 = "yes"
        //Question Four
        let questionFour = prompt('yes or no: Software development is a very high paying job')
        if(questionFour==anw4){
            //Will add 1 to current score
            score = score + 1
            alert('Correct! Your score is:' + score)
        }else{
            alert("Wrong")}
            //Answer to question 5
            let anw5 = "yes"
            //Question Five
            let questionFive = prompt('yes or no: I currently live in Cordova, Tn')
            if(questionFive==anw5){
                //Will add 1 to current score
                score = score + 1
                alert('Correct! Your score is:' + score)
            }else{
                alert("Wrong")}
                // 4 attempts
                for(let i = 0;i<4; i++){
                    //Question Six
                    let questionSix = prompt('Guess a number between 1 and 10')
                    //Answer to question 6
                    if (questionSix == 4) {
                        //Will add 1 to current score
                        score = score + 1
                        alert("You got it right! Your score is: " + score);
                        break;
                    } else (questionSix > 4);{
                      alert("Your guess was " + question + ". That's too high. Try Again!")
                    }if(questionSix < 4);{
                     alert("Your guess was " + questionSix + ". That's too low. Try Again!")
                   }
                 }
                   for(let i = 0; i<6; i++){
                       //all the right choices
                    let num = /['1', '3', '5', '7' , '9']/;
                    let question = prompt('What is one odd number from these choices : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
                    if(question.match(num)){
                        score = score + 1
                        alert('Right!!! your final score is: ' + score)
                        break;
                    }else{
                        alert('wrong! Try again');
                    }
                     }
}
game() 






//qi[0]=="y" || q1[0]=="Y"