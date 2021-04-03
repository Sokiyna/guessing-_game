'use strict';

let userName=prompt("May we know your name?")
alert("You are very Welcome   " + "" + userName);



let status = prompt(" I am I married?");



status = status.toLowerCase();

let age = 24;
if(status=== "yes"|| status==="y"){
    alert("Soryy I am single and my age is  " + " "+ age);
} else if(status==="no"|| status==="n"){
    alert("Correct I am single and my age is  "+" "+ age);
}


let myCountry = prompt("Do you think I am from Jordan");

myCountry= myCountry.toLowerCase();

if(myCountry === "yes"|| myCountry==="y"){ 
    alert("You are correct  " + userName +" I am Jordanian");

}else if(myCountry=== "no"||myCountry ==="n"){

    alert("That is not correct "+ userName +" I am Jordanian" );
}



let meetMe = prompt("Have you meet me before?");

meetMe= meetMe.toLowerCase();

if(meetMe === "yes"|| meetMe ==="y"){
    alert("It is my pleasure to meet you again  " + "  "+ userName);
} else if(meetMe === "no" || meetMe === "n"){
    alert("I am looking forwoed to see you "+ " "+ userName);
}

let myJob = prompt("Do you think I am programmer?");

myJob = myJob.toLowerCase();

if(myJob === "yes"|| myJob === "y"){
    alert("Yes you are correct "+ " "+ userName+ "I am new programmer");

} else if(myJob==="no"|| myJob==="n"){
    alert("That is not correct  " +" "+ userName+"   I am a jounior");
}


let myName = prompt("Before saying goodbye, do you know my name?");

myName = myName.toLowerCase();

if(myName === "yes"|| myName==="y"){
    alert("Wish you a great day  " +" "+ userName);
} else if(myName==="no"|| myName==="n"){
    alert("My name is Sokiyna "+" "+ userName +" I wish you a great day");
}

alert("Thank you for visiting my page"+" "+ userName);

