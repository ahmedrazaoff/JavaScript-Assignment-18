// Chapter 9-11


//////////////////////// USER INPUT & CONDITIONAL STATEMENT


// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter your City Name");
if(city === "karachi"){
    alert("Welcome to city of lights");
}else{
    alert("Try again");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your Gender");
if(gender === "Male"){
    alert("Good Morning Sir");
}
else if(gender === "Female"){
    alert("Good Morning Ma’am");
}else{
    alert("Enter your Gender again");
}

// 3. Write a program to take input color of road traffic signal
// from the user 

var trafficLight = prompt("Pick a color \n Red Yellow Green");
if(trafficLight === "Red"){
    document.write("<table> <tr> <th>Single Color</th><th>Message</th></tr><tr><td>Red</td> <td>Must Stop</td></tr></table>");
}
else if(trafficLight === "Yellow"){
    document.write("<table> <tr> <th>Single Color</th><th>Message</th></tr><tr><td>Yellow</td> <td>Ready to move</td></tr></table>");
}else if(trafficLight === "Green"){
    document.write("<table> <tr> <th>Single Color</th><th>Message</th></tr><tr><td>Green</td> <td>Move Now</td></tr></table>");
}


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var carFuel = prompt("Write down your Car Fuel");

if(carFuel <= 0.25){
    alert("Please refill the fuel in your car");
}else{
    alert("Your Car has enough fuel")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}else if (true){
alert("True");
}else if (false){
alert("False");
}else if("car" < "cat"){
    alert("car is smaller than cat");
}else{
    alert("None of the condition is met");
}

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade

var subject1 = +prompt("Your Maths Marks")
var subject2 = +prompt("Your English Marks")
var subject3 = +prompt("Your Urdu Marks")
var subject4 = +prompt("Your Physics Marks")

var totalMarks = subject1+subject2+subject3+subject4

var total = (totalMarks)/(400)*100;

var perc = total
document.write("<h1> Mark Sheet </h1> <hr>")

if (perc >= 80 && perc < 100){
    document.write("<h4> Total Marks :"+ 400 + "<br> </h4>");
    document.write("<h4> Marks Obtained :"+ totalMarks + "<br> </h4>");
    document.write("<h4> Percentage :"+ perc+ "%"  + "<br> </h4>");
    document.write("<h4> Grade : A+" + "<br> </h4>");
    document.write("<h4> Remarks : Good" + "<br> </h4>");
}
else if (perc >= 70 && perc < 80){
    document.write("<h4> Total Marks :"+ 400 + "<br> </h4>");
    document.write("<h4> Marks Obtained :"+ totalMarks + "<br> </h4>");
    document.write("<h4> Percentage :"+ perc+ "%"  + "<br> </h4>");
    document.write("<h4> Grade : A" + "<br> </h4>");
    document.write("<h4> Remarks : Good but You need to work hard for next time" + "<br> </h4>");
}
else if (perc >= 60 && perc < 70){
    document.write("<h4> Total Marks :"+ 400 + "<br> </h4>");
    document.write("<h4> Marks Obtained :"+ totalMarks + "<br> </h4>");
    document.write("<h4> Percentage :"+ perc+ "%"  + "<br> </h4>");
    document.write("<h4> Grade : B" + "<br> </h4>");
    document.write("<h4> Remarks : Fair , Try Harder next time" + "<br> </h4>");
}
else if (perc >= 50 && perc < 60){
    document.write("<h4> Total Marks :"+ 400 + "<br> </h4>");
    document.write("<h4> Marks Obtained :"+ totalMarks + "<br> </h4>");
    document.write("<h4> Percentage :"+ perc+ "%"  + "<br> </h4>");
    document.write("<h4> Grade : C" + "<br> </h4>");
    document.write("<h4> Remarks : you need  to study more and try harder in future." + "<br> </h4>");
}
else if (perc >= 50 && perc < 60){
    document.write("<h4> Total Marks :"+ 400 + "<br> </h4>");
    document.write("<h4> Marks Obtained :"+ totalMarks + "<br> </h4>");
    document.write("<h4> Percentage :"+ perc+ "%"  + "<br> </h4>");
    document.write("<h4> Grade : D" + "<br> </h4>");
    document.write("<h4> Remarks : Not good you have to work Harder next time" + "<br> </h4>");
}
else if (perc >= 40 && perc < 50){
    document.write("<h4> Total Marks :"+ 400 + "<br> </h4>");
    document.write("<h4> Marks Obtained :"+ totalMarks + "<br> </h4>");
    document.write("<h4> Percentage :"+ perc+ "%" + "<br> </h4>");
    document.write("<h4> Grade : E" + "<br> </h4>");
    document.write("<h4> Remarks : Try Harder next time");
}else if (perc >= 33 && perc < 40){
    document.write("Fail , Please Study More!" + "<br> </h4>");
}
else{
    alert("Something worng!!! \n Please Check and enter your marks again")
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 8;
var userNumber = prompt("Guess game \n Guess the Number between 1 to 10");

if( userNumber == secretNumber){
    alert("Bingo! Correct answer"); 
}else if(userNumber ===  secretNumber - 1){
    alert("Close Enough to the correct Answer");
}else if(userNumber ===  secretNumber + 1){
    alert("Close Enough to the correct Answer");
}else{
    alert("try  Again!");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


var  num = prompt("Enter any number");

if(num % 3 ==  0 ){
    alert(num+" is Divisible by 3");
}else{
    alert(num+ " is not Divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var  n=prompt("Enter a number :");

if(n%2==0){
    alert(n+" is Even")
}
else {
    alert(n+" is Odd")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var  temp = +prompt("Please enter Temperature in degree Celsius:");

if (temp > 40)  {
    alert("It is too hot outside.");
} else if (temp > 30)  {
    alert("The Weather today is Normal.");
} else if (temp > 20)  {
    alert("Today's Weather is cool.")
} else if (temp >= 10)  {
    alert("OMG! Today's weather is so Cool.")
} else {
    alert("It's freezing outside!");
} 

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var  num1 = prompt('Enter first number');
var  num2 = prompt('Enter second number');
var  oper = prompt('Enter operation (+  , -, *, /, %)');

num1 = +num1;
num2 = +num2;

if (oper == '+') {
   document.write(num1 + " + " + num2 + " = " +  (num1 + num2));
} else if (oper == '-'){
   document.write(num1 + " - " + num2 + " = " +  (num1 - num2));
} else if (oper == '/'){ 
   document.write(num1 + " / " + num2 + " = " +  (num1/num2));
} else if (oper == '*'){
   document.write(num1 + " * " + num2 + " = " +  (num1*num2));
} else if (oper == '%'){
   document.write(num1 + " % " + num2 + " = " +  (num1%num2));
} else {
   alert('Invalid operator');
}

// //////////////////Chapter 9-11 Compelete ///////////////////////


// ///////////////////////Chapter 12-13////////////////////////////////////


// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var  x = prompt("Enter a character");
x = x.toLowerCase();

if ((x >= 48 && x <= 57)) {
    alert("The entered character is a Number.");
} else if ((x >= 65 && x <= 90)) { 
    alert("The entered character is an Upper Case Letter.");
} else if ((x >= 97 && x <= 122)) {
    alert("The entered character is a Lower Case Letter.");
} else {
    alert("The entered character does not belong to any category.");
}

// 2. Ask user for two numbers and display their sum. If the user enters
// non numeric values then display “Please enter numeric data”.

var n1 = prompt("Enter first number","");
var n2 = prompt("Enter second number", "");

if (isNaN(n1) || isNaN(n2)){ 
     alert("Please Enter Numeric Data");
 }else{
     var s = parseInt(n1)+parseInt(n2);
     alert(n1+" + "+n2+" = "+s);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var  num = prompt("Enter a number: ","");
num = parseFloat(num);

if (num > 0){
   alert("The number is Positive");
}else if (num < 0){
   alert("The number is Negative");
}else{
   alert("The number is Zero");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var  ch = 'a';
ch=prompt("Enter a Character : ","");

if((ch =='A')||(ch=='E')||(ch=='I')||(ch=='O')||(ch=='U')){
   alert("The character is Vowel");
}else{ 
   alert("The character is Consonant");
}



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var storePassword = "Javascript123"
password = prompt("Please Enter Your Password")
confrimPassword = prompt("Please Confrim Your Password")

if(storePassword=="Javascript123" && password == confrimPassword){
        alert("Correct! The password you entered matches the original password")
}
else {
    alert("Incorrect password! Try again.");
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var  greeting;
var hour = 13; 
if (hour < 18) {
   greeting = "Good day";
} else {
   greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt("Enter Time In 24 Hours Format","like : 1900,2100,2200");
if(time >= "0000" && time < 1200){
    alert("Good Morning");
}else if(time >= 1200 && time > 1700){
    alert("Good Afternoon");
}else if(time >= 1700 && time > 2100){

}else if(time >= 2100 && time > 2359){

}else{
    alert("please  enter valid time");
}

// //////////////////Chapter 10 (if statements)////////////////////


// 1. var city = Karachi if (city = Karachi) { console.log(The City
//     OF Lights) Correct the above statement:
//     Also try this statement by yourself

var city = "Karachi"

if (city == "Karachi") {
    console.log("The City Of Lights");
}else{
    console.log("This is not Karachi");
}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

var  x = 6;
var  y = 6;
z = +prompt("What Is The Value Of Z");

if (x === y) {
    document.write("<br>Please Enter a Value For Z<br><input type='number' id='Z'>");
}else {
    document.write("X is Not Equal To Y");
}


// 3. Code an if statement that tests if ZipCode is 10010 so, Alert
// that Karachi. if not then alert (Please write correct city)

var zipCode = +prompt("Enter ZipCode") 

if (zipCode === 10010){
    alert( "Karachi");
}else{
    alert("please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;

if  (x === 1) {
   x = 5 ;
} else {
   x = -99;
}
