let student_name = "Nadia";
let studentAge = 20;
let isEnrolled = true;

document.write("<h2>Student Info</h2>");
document.write("Name: " + student_name + "<br>"); 
document.write("Age: " + studentAge + "<br>"); 
document.write("Enrolled: " + isEnrolled + "<br>"); 

let ageString = String(studentAge);
document.write("Age Type: " + typeof ageString + "<br>"); 

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let total = num1 + num2; 

document.write("Sum: " + total + "<br>");

let userAge = Number(prompt("Enter your age"));
if (userAge === 18) { 
    document.write("You can vote!<br>"); 
} else if (userAge < 18) { 
    document.write("Sorry, you can't vote.<br>"); 
} else {
    document.write("You're old enough to vote!<br>");
}

for (let i = 1; i < 10; i++) {
    document.write(i + " ");
}

let num;
do {
    num = Number(prompt("Enter a number greater than 10"));
} while (num < 10);