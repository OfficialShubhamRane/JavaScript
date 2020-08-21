/*************************************
console.log, prompt, alert
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
let job = "Teacher"
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

/**************************************************** Coding Challege 2 
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

/************************************** Function Declaration & Function Expressor
function age(bYear) {
    return 2020 - bYear;
}
var string = function yearsToRetiremtnt(firstName, birthYear) {
    var yearsLeft = 65 - age(birthYear);
    var isRetired = (age(birthYear) >= 65) ? true : false;
    if(isRetired) 
    { return firstName + " is already retired.";}else
    { return firstName + " year's left for retirment are " + yearsLeft;}
    
}

console.log(string("Shubham", 1998));
*/

/* ********************************************** Coding challege 3: Tip Calculator 
var bills = [124,48,268];
var allTips = new Array();
var allFinalBills = new Array();


function onlyTips(bill) {
     if (bill < 50) {
        return bill * .2; 
     }else if( bill >= 50 && bill < 200){
        return bill * .15;
     }else{
        return bill * .1;               
     }
}

allTips.push(onlyTips(bills[0]));
allTips.push(onlyTips(bills[1]));
allTips.push(onlyTips(bills[2]));

allFinalBills.push(allTips[0] + bills[0]);
allFinalBills.push(allTips[1] + bills[1]);
allFinalBills.push(allTips[2] + bills[2]);

console.log(allTips);
console.log(allFinalBills);
 */

/***************************************** Objects  */
/* var shubham = {                                     // way 1 Declaration
    fName : "Shubham",
    lName : "Rane",
    job: "Student",
    bYear: 1997,
    family: ["Smita", "Rajan", "Adwait"],
    calcAge: function() {                           // function expression
        this.age = 2018 - this.bYear;               // USE OF this KEYWORD
    }
};

var john = new Object();                            // way 2 Declaration
john.fName = "John";
john.lName = "Raymond"

console.log(shubham.fName);                         // way 1 extraction
console.log(shubham["lName"]);                      // way 2 extraction

shubham.job = "Developer";                          // modification
shubham.bMonth = "Sept";                            // insertion
shubham.calcAge();                                  // function call
console.log(shubham); */


/**************************************Coding Challege 4 */
 
/* var john = {
    fullName : "John Snow",
    mass : 60,
    height : 1.8,
    calcBMI : function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName : "Mark Er",
    mass : 75,
    height : 1.8,
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

(john.calcBMI() == mark.calcBMI())          // method called and used at te same time
? console.log("Its a tie")
:

(john.bmi > mark.bmi)                       // used values returned by methods
? console.log(john.fullName + " has greater BMI than " + mark.fullName)
: console.log(mark.fullName + " has greater BMI than " + john.fullName)
 */

 /************************************************ Coding Challenge 5 */



var john = {
    bills : [124, 48, 268, 180, 42],
    calcTip : function(){
        onlyTips = new Array();
        finalBills = new Array();
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                onlyTips[i] = this.bills[i] * .2; 
                finalBills[i] = onlyTips[i] + this.bills[i];
            }else if( this.bills[i] >= 50 && this.bills[i] < 200){
                onlyTips[i] = this.bills[i] * .15;
                finalBills[i] = onlyTips[i] + this.bills[i];
            }else{
                onlyTips[i] = this.bills[i] * .1;
                finalBills[i] = onlyTips[i] + this.bills[i];           
            }
        }
    }

}
john.calcTip();

//console.log(bills);
console.log(onlyTips);
console.log(finalBills);