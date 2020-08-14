/*******************************
 * console.log, prompt, alert
var firstName = "Shubham";
var age = 22;

alert("Your name is "+ firstName + " and your age is "+age+".");
alert("Can you tell us your last name?");
var lastName = prompt("Enter last name here: ");
console.log("My full name is "+ firstName +" "+ lastName);

if (age > 21) {
    var consent = prompt("Are you ready for marriage yet? (Yes/No)");
}
if(consent == "Yes"){
    alert("We are posting you on matremonial site.");
}else if(consent == "No"){
    alert("Then die single.")
}else{
    alert("INVALID INPUTE");
}
*/

/**************************************** 
 * let job = "Teacher"

switch (job) {
    case "Teacher":
        console.log("Teacher he is");
        break;
    case "Desiger":
        console.log("Desinger he is");
        break;
    case "Dancer":
        console.log("Dancer he is");
        break;
    default:
        console.log("Invalid Input");
        break;
}*/

/********** Coding Challege 2 
var avgJ, avgM, avgG;

avgJ = (89 + 120 + 103) / 3; //312
avgM = (116 + 94 + 123) / 3; //333
avgG = (94 + 134 + 105) / 3; //333

if (avgJ > avgM && avgJ > avgG) {
    console.log("John wins with average score of " + avgJ );
} else if(avgM > avgJ && avgM > avgG) {
    console.log("Mike wins with average score of " + avgM);
} else if(avgG > avgM && avgG > avgJ) {
    console.log("Gloria wins with average score of " + avgG);
} else if (avgJ == avgM || avgJ == avgG || avgM == avgG) {
    console.log("Tie Tie Tie");
}
console.log("END");
*/

function age(bYear) {
    return 2020 - bYear;
}
function yearsToRetiremtnt(firstName, birthYear) {
    var yearsLeft = 65 - age(birthYear);
    console.log(firstName + " year's left for retirment are " + yearsLeft);
}

yearsToRetiremtnt("Shubham", 1997)