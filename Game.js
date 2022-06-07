'use strict';
let userName = prompt("What is your Name");
alert("Welcome " + userName);
console.log("Welcome " + userName);
document.write("Welcome "+ userName);

function game(){
    let anw1 = "no"
    let questionOne = prompt("yes or no: My younger brother told me to try software development?")
if(questionOne==anw1){
    alert("Correct!")
}else{
    alert('Wrong')
}
let anw2 = "no"
let questionTwo = prompt("yes or no: I Graduate HighSchool in 2006")
if(questionTwo==anw2){
    alert('Correct')
}else{
    alert("Wrong")}
    let anw3 = "yes"
    let questionThree = prompt("yes or no: One of my goals is to continue software development into the future")
    if(questionThree==anw3){
        alert('Correct')
    }else{
        alert("Wrong")}
        let anw4 = "yes"
        let questionFour = prompt('yes or no: Software development is a very high paying job')
        if(questionFour==anw4){
            alert('Correct')
        }else{
            alert("Wrong")}
            let anw5 = "yes"
            let questionFive = prompt('yes or no: I currently live in Cordova, Tn')
            if(questionFive==anw5){
                alert('Correct')
            }else{
                alert("Wrong")}
}
game()