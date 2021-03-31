// 'use strict';

// let userName=prompt("May we know your name?")
// alert("You are very Welcome   " + "" + userName);



// let status = prompt(" I am I married?");


// // I added my age to correct the user 
// //The lower case is to correct the answer if the user used the upper case
// status = status.toLowerCase()

// let age = 24
// if(status== "yes"|| status=="y"){
//     //console.log("Soryy I am single and my age is  "+ "  "+ age );
//     alert("Soryy I am single and my age is  " + " "+ age);
// } else if(status=="no"|| status=="n"){
//     //console.log("You are correct I am single and my age is" + " "+ age);
//     alert("Correct I am single and my age is  "+" "+ age);
// }


// let myCountry = prompt("Do you think I am from Jordan")

// myCountry= myCountry.toLowerCase()

// if(myCountry == "yes"|| myCountry=="y"){ 
//     //console.log("You are correct" + userName +" I am Jordanian"  );
//     alert("You are correct  " + userName +" I am Jordanian")

// }else if(myCountry== "no"||myCountry =="n"){

//     //console.log("That is no correct "+ userName +" I am Jordanian" );
//     alert("That is not correct "+ userName +" I am Jordanian" )
// }


// let meetMe = prompt("Have you meet me before?")

// meetMe= meetMe.toLowerCase()

// if(meetMe == "yes"|| meetMe =="y"){
//     //console.log("It is my pleasure to meet you again  " + "  "+ userName);
//     alert("It is my pleasure to meet you again  " + "  "+ userName)
// } else if(meetMe == "no" || meetMe == "n"){
//     //console.log("I am looking forwoed to see you ");
//     alert("I am looking forwoed to see you "+ " "+ userName)
// }

// let myJob = prompt("Do you think I am programmer?")

// myJob = myJob.toLowerCase()

// if(myJob == "yes"|| myJob == "y"){
//    // console.log("Yes you are correct "+ " "+ userName+ "I am new programmer");
//     alert("Yes you are correct "+ " "+ userName+ "I am new programmer")

// } else if(myJob=="no"|| myJob=="n"){
//     //console.log("That is not correct  " +" "+ userName+" I am a jounior");
//     alert("That is not correct  " +" "+ userName+"   I am a jounior")
// }


// let myName = prompt("Before saying goodbye, do you know my name?")

// myName = myName.toLowerCase()

// if(myName == "yes"|| myName=="y"){
//     //console.log("Wish you a great day  " +" "+ userName);
//     alert("Wish you a great day  " +" "+ userName)
// } else if(myName=="no"|| myName=="n"){
//     //console.log("My name is Sokiyna "+" "+ userName +" I wish you a great day");
//     alert("My name is Sokiyna "+" "+ userName +" I wish you a great day")
// }

// alert("Thank you for visiting my page"+" "+ userName)

'use strict';

let userName = prompt('May I have your name?');

while (!userName) {
    userName = prompt('please write your name!');

}





alert('You are welcome   ' + userName + ' , enjoy the rest of the day');



let score = 0;

function funGame1() {
    let funGame1 = '';
    for (let i = 0; i < 4; i++) {

        funGame1 = prompt("Guess a number between 25 and 30 ");

        if (funGame1 == "27") {
            alert("You made it fast! yes the number is 27");
            score++;
            break;
        }
        else if (funGame1 == "25") {
            alert("You are close");
        }
        else if (funGame1 == "26") {
            alert("You are too close");
        }

        else if (funGame1 == "30") {
            alert("You are too far :( ")
        }

        else if (funGame1 !== "27") {
            alert(" I am sorry but the answer is not correct ");

        }


    }

    alert("The trails for the first level end, and the correct number is 27");

}

funGame1();


function funGame2() {
    let funGame2 = '';
    for (let i = 0; i < 4; i++) {

        funGame2 = prompt("Guess a number between 35 and 40 ");

        if (funGame2 == "37") {
            alert("You made it fast! yes the number is 37");
            score++;
            break;
        }
        else if (funGame2 == "35") {
            alert("You are close");
        }
        else if (funGame2 == "36") {
            alert("You are too close");
        }

        else if (funGame2 == "40") {
            alert("You are too far :( ");
        }

        else if (funGame2 !== "37") {
            alert(" I am sorry but the answer is not correct ");

        }

    }

    alert("The trails for the second level end, and the correct number is 37");
}

funGame2();


function funGame3() {

    let funGame3 = '';
    for (let i = 0; i < 4; i++) {

        funGame3 = prompt("Guess a number between 45 and 50 ");

        if (funGame3 == "47") {
            alert("You made it fast! yes the number is 47");
            score++;
            break;
        }
        else if (funGame3 == "45") {
            alert("You are close");
        }
        else if (funGame3 == "46") {
            alert("You are too close");
        }

        else if (funGame3 == "50") {
            alert("You are too far :( ");
        }

        else if (funGame3 !== "47") {
            alert(" I am sorry but the answer is not correct ");


        }

    }

    alert("The trails for the third level end, and the correct number is 47")
}


funGame3();

function funGame4() {

    let funGame4;

    for (let i = 0; i < 4; i++) {

        funGame4 = prompt("Guess a number between 55 and 60 ");

        if (funGame4 == "57") {
            alert("You made it fast! yes the number is 57");
            score++;
            break;
        }
        else if (funGame4 == "55") {
            alert("You are close");
        }
        else if (funGame4 == "56") {
            alert("You are too close");
        }

        else if (funGame4 == "60") {
            alert("You are too far :( ");
        }

        else if (funGame4 !== "57") {
            alert(" I am sorry but the answer is not correct ");


        }

    }

    alert("The trails for the fourth level end, and the correct number is 57");

}

funGame4();


let funGame5 = '';
for (let i = 0; i < 4; i++) {

    funGame5 = prompt("Guess a number between 65 and 70 ");

    if (funGame5 == "67") {
        alert("You made it fast! yes the number is 67");
        score++;
        break;
    }
    else if (funGame5 == "65") {
        alert("You are close");
    }
    else if (funGame5 == "66") {
        alert("You are too close");
    }

    else if (funGame5 == "70") {
        alert("You are too far :( ");
    }

    else if (funGame5 !== "67") {
        alert(" I am sorry but the answer is not correct ");


    }

}

alert("The trails for the fifth level end, and the correct number is 67")


for (let i = 0; i < 4; i++) {

    let funGame6 = prompt("Guess a number between 75 and 80 ");

    if (funGame6 == "77") {
        alert("You made it fast! yes the number is 57");
        score++;
        break;
    }
    else if (funGame6 == "75") {
        alert("You are close");
    }
    else if (funGame6 == "76") {
        alert("You are too close");
    }

    else if (funGame6 == "80") {
        alert("You are too far :( ");
    }

    else if (funGame6 !== "77") {
        alert(" I am sorry but the answer is not correct ");


    }

}

alert("The trails for the sixth level end, and the correct number is 77");


let myTalent = ["swimming", "football", "basketball"];

let flag = false;

for (let i = 0; i < 6; i++) {

    let userAnswer = prompt("Can you guess in which sport I am talented?");

    userAnswer = userAnswer.toLowerCase();
    for (let x = 0; x < myTalent.length; x++) {
        if (userAnswer === myTalent[x].toLowerCase()) {
            flag = true;
            break;
        }
    }

    if (flag) {
        alert('That is correct my favorite talent is ' + userAnswer);
        break;
    }

    else {
        alert('That is wrong try again');
    }


}

alert('Good Job!... You got ' + score + ' correct answers!');


















