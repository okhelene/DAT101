"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other should count from 10 to 1. Use only two lines to print the rows
let textline1 = "";
let textline2 = "";
for (let i = 1; i <= 10; i++) {
    textline1 += i.toString() + ", ";
}
for (let i = 10; i >= 1; i--) {
    textline2 += i.toString() + ", ";
}

printOut(textline1);
printOut(textline2);
printOut(newLine)

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
//Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
//example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
//"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
//number once the "while" loop has completed. You do not need to print anything while the "while" loop is in progress
let target = 5;
let guess = 0;
while (guess !== target) {
    guess = Math.floor(Math.random() * 60) + 1; //eller flytt denne setningen opp til der du definerer at guess er 0
    if (guess === target) {
        printOut("the number is " + guess);
    }
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
//Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
//number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the Date.now() function to measure time
//Random, 0.0 til 0.9999
const target2 = 500000;
let guess2;
let NGuesses = 0;
const startTime = Date.now();
do {
    guess2 = Math.floor(Math.random() * 1000000) + 1;
    NGuesses++;
}
while (guess2 !== target2) ;
printOut("number of guesses: " + NGuesses);
const timeDiff = Date.now() - startTime;
printOut("number of mseconds: " + timeDiff);
printOut("the number is " + guess2);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
//Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
let primestext = ""; //store all prime numbers here
for (let i = 1; i < 200; i++) {
    let j = i - 1; //to check divisors
    let isPrime = true; //assume i is prime
    while (j > 1 && isPrime) { //check divisors from i-1 down to 2
        let rest = i % j; //remainder of i divided by j
        isPrime = rest != 0; // if remainder is 0, i is not prime
        j--; //decrease divisor
    }
    if (isPrime) { //if i is prime, add it to the list
        primestext += " " + i; 
    }
}
printOut(primestext);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the second cell, and so on. Hint: Use what we call nested loops. This is a "for" loop within another "for" loop

let anotherText = "";
for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let column = 1; column <= 9; column++) {
        line += "K" + column + "R" + row + " ";
    }
    anotherText += line + newLine;
}
printOut(anotherText);
printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
//Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive). For each grade, print the student's grade (A to F) based on the point distribution provided:
//○ A: 89% – 100% ○ B: 77% – 88% ○ C: 65% – 76% ○ D: 53% – 64% ○ E: 41% – 52% ○ F: 0% – 40%
//(Bonus): Sort and print grades in descending order (from A to F) without using an array. You can use a for loop and a do/while loop to achieve this. Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part 9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain the same, but this hint will give you a head start

const students = 5;
let grade1 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade2 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade3 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade4 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);
let grade5 = ((Math.ceil(Math.random() * 236) / 236) * 100).toFixed(2);

let text6 = "";

if (grade1 >= 89) {
    text6 += "Student 1: " + grade1 + "% - A";
} else if (grade1 >= 77) {
    text6 += "Student 1: " + grade1 + "% - B";
} else if (grade1 >= 65) {
    text6 += "Student 1: " + grade1 + "% - C";
} else if (grade1 >= 53) {
    text6 += "Student 1: " + grade1 + "% - D";
} else if (grade1 >= 41) {
    text6 += "Student 1: " + grade1 + "% - E";
} else {
    text6 += "Student 1: " + grade1 + "% - F";
}
printOut(text6);

text6 = "student 2: ";
if (grade2 >= 89) {
    text6 += grade2 + "% - A";
} else if (grade2 >= 77) {
    text6 += grade2 + "% - B";
} else if (grade2 >= 65) {
    text6 += grade2 + "% - C";
} else if (grade2 >= 53) {
    text6 += grade2 + "% - D";
} else if (grade2 >= 41) {
    text6 += grade2 + "% - E";
} else {
    text6 += grade2 + "% - F";
}
printOut(text6);

text6 = "student 3: ";
if (grade3 >= 89) {
    text6 += grade3 + "% - A";
} else if (grade3 >= 77) {
    text6 += grade3 + "% - B";
} else if (grade3 >= 65) {
    text6 += grade3 + "% - C";
} else if (grade3 >= 53) {
    text6 += grade3 + "% - D";
} else if (grade3 >= 41) {
    text6 += grade3 + "% - E";
} else {
    text6 += grade3 + "% - F";
}
printOut(text6);

text6 = "student 4: ";
if (grade4 >= 89) {
    text6 += grade4 + "% - A";
} else if (grade4 >= 77) {
    text6 += grade4 + "% - B";
} else if (grade4 >= 65) {
    text6 += grade4 + "% - C";
} else if (grade4 >= 53) {
    text6 += grade4 + "% - D";
} else if (grade4 >= 41) {
    text6 += grade4 + "% - E";
} else {
    text6 += grade4 + "% - F";
}
printOut(text6);

text6 = "student 5: ";
if (grade5 >= 89) {
    text6 += grade5 + "% - A";
} else if (grade5 >= 77) {
    text6 += grade5 + "% - B";
} else if (grade5 >= 65) {
    text6 += grade5 + "% - C";
} else if (grade5 >= 53) {
    text6 += grade5 + "% - D";
} else if (grade5 >= 41) {
    text6 += grade5 + "% - E";
} else {
    text6 += grade5 + "% - F";
}
printOut(text6);
//du må ha en kodeblokk per student, men du kan gjenbruke text6 variabelen hver gang
//det er også lurt å vite at toFixed(2) gjør at tallet får to desimaler


//enda bedre er å lage en funksjon som tar inn poeng og returnerer bokstavkarakteren ved å bruke return inne i funksjonen, det er bedre fordi du slipper å gjenta så mye kode. det gjøres slik:""
function Students(grade) {
    if (grade >= 89) {
        return "A";
    } else if (grade >= 77) {
        return "B";
    } else if (grade >= 65) {
        return "C";
    } else if (grade >= 53) {
        return "D";
    } else if (grade >= 41) {
        return "E";
    } else {
        return "F";
    }
} //vet ikke om dette faktsik fungerer på noen måte, var bare Copilot som foreslo 

//printing grades in descending order
for (let i = 1; i < students; i++) {
    let grade = 0;
    switch (i) {
        case 1:
            grade = grade1;
            break;
        case 2:
            grade = grade2;
            break;
        case 3:
            grade = grade3;
            break;
        case 4:
            grade = grade4;
            break;
        case 5:
            grade = grade5;
            break;
    }

    let j = 0;
    do {
        let gradeCompare = 0;
        switch (j) {

            case 1: //swap with grade1
            if (grade < grade1) {
                let temp = grade;
                grade = grade1;
                grade1 = temp;
            }
            break;

        case 2:
            if (grade < grade2) {
                let temp = grade;
                grade = grade2;
                grade2 = temp;
            }
            break;
                
        case 3:
            if (grade < grade3) {
                let temp = grade;
                grade = grade3;
                grade3 = temp;
            }
            break;

        case 4:
            if (grade < grade4) {
                let temp = grade;
                grade = grade4;
                grade4 = temp;
             }
            break;

        case 5:
            if (grade < grade5) {
                let temp = grade;
                grade = grade5;
                grade5 = temp;
            }
            break;
    }
    j++;
} while (j <= students);
}


printOut("Grades in descending order:");
printOut("Student 1: " + grade1 + "%");
printOut("Student 2: " + grade2 + "%");
printOut("Student 3: " + grade3 + "%");
printOut("Student 4: " + grade4 + "%");
printOut("Student 5: " + grade5 + "%");
// når du printer ut gradene kommer de i riktig rekkefølge fordi vi har sortert dem i synkende rekkefølge, som betyr at grade1 ikke blir printet ut før alle de høyere gradene er printet ut... tror jeg
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//Simulate 6 dice and print how many "throws" it takes to get:
//● 1 2 3 4 5 6 (full straight)
//● 3 pairs
//● 2 of a kind and 4 of a kind (tower)
//● All the same (Yahtzee)

function matchNumber(aText, aNumber) {
    let count = 0;
    for (let i = 0; i < aText.length; i++) {
        if (aText.charAt(i) === aNumber.toString()) {
            count++;
        }
    }
    return count;
}
let throws = 0;
let fullStraight = false;
let yahtzee = false;
let tower = false; // 2+4 of a kind
let threePairs = false; // 3 pairs e.g., 112233
do {
    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);
    const d3 = Math.ceil(Math.random() * 6);
    const d4 = Math.ceil(Math.random() * 6);
    const d5 = Math.ceil(Math.random() * 6);
    const d6 = Math.ceil(Math.random() * 6);
    throws++;
    const t = d1.toString() + d2.toString() + d3.toString() + d4.toString() + d5.toString() + d6.toString();
    let c1 = matchNumber(t, 1);
    let c2 = matchNumber(t, 2);
    let c3 = matchNumber(t, 3);
    let c4 = matchNumber(t, 4);
    let c5 = matchNumber(t, 5);
    let c6 = matchNumber(t, 6);
    const t2 = c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString() + c6.toString();

    const cm1 = matchNumber(t2, 1); //count of numbers that appear once used for full straight
    const cm2 = matchNumber(t2, 2); //count of numbers that appear twice, used for three pairs and tower
    const cm4 = matchNumber(t2, 4); //count of numbers that appear four times, used for towers
    const cm6 = matchNumber(t2, 6); //count of numbers that appear six times
    //check for full straight
    if (cm1 === 6 && !fullStraight) {
        //we have a fullstraight
        fullStraight = true;
        printOut("Full straight: " + t + " (throws: " + throws + ")");
    }
    //check for yahtzee
    if (cm6 === 1 && !yahtzee) {
        // we have yahtzee
        yahtzee = true;
        printOut("Yahtzee: " + t + " (throws: " + throws + ")");
    }
    //check for tower
    if (cm4 === 1 && cm2 === 1 && !tower) {
        // We have tower
        tower = true;
        printOut("Tower: " + t + " (throws: " + throws + ")");
    }
    //check for three pairs 
    if (cm2 === 3 && !threePairs) {
        //we have three pairs
        threePairs = true;
        printOut("Three pairs: " + t + " (throws: " + throws + ")");
    }
} while (!fullStraight || !yahtzee || !tower || !threePairs);

    printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
