//Write a program that prompts for three integers.
// The program prints the sum, product and
// average of the numbers to the HTML document.


let x=parseInt(prompt("enter the first number"));
let y=parseInt(prompt("enter the second number"));
let z=parseInt(prompt("enter the third number"));
plus = x+y+z;
multi = x*y*z;
avg = (x+y+z)/2;

document.querySelector('#add').innerHTML = 'the sum is '+plus;
document.querySelector('#multi').innerHTML = 'the multi is '+multi;
document.querySelector('#avg').innerHTML = 'the avg is '+avg;