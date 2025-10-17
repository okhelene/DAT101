"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Solve the equation using parentheses to get a value of -34
const part1Ans =  2 + (3 * (2 - 4)) * 6;
const equation = "2 + 3 * 2 - 4 * 6"
const Part2Ans = "2 + (3 * (2 - 4)) * 6"
printOut(equation);
printOut("2 + (3 * (2 - 4)) *6 = " + part1Ans);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//convert 25 metres and 34 centimeters to inches
const meters = 25; 
const centimeters = 34; 
const totalCentimeters = (meters * 100) + centimeters; 
const inches = totalCentimeters / 2.54;
const roundedInches = Math.round(inches * 100) / 100; // rounding to 2 decimal places
printOut("25 metres and 34 centimeters is equal to " + roundedInches + " inches. "); 
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The task must be solved with primitives
const days = 3; 
const hours = 12;
const minutes = 14;
const seconds = 45; 
const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);
printOut("3 days, 12 hours, 14 minutes and 45 seconds is equal to " + totalMinutes + " minutes. ");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The task must be solved with primitives
const totalMinutes2 = 6322.52;
const days2 = Math.floor(totalMinutes2 / (24 * 60));
const hours2 = Math.floor((totalMinutes2 % (24 * 60)) / 60);
const minutes2 = Math.floor(totalMinutes2 % 60);
const seconds2 = Math.round((totalMinutes2 - Math.floor(totalMinutes2)) * 60);
printOut("6322.52 minutes is equal to " + days2 + " days, " + hours2 + " hours, " + minutes2 + " minutes and " + seconds2 + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert 54 dollars to Norwegian kroner, and print the price for both: NOK → USD and USD → NOK. Use 76 NOK = 8.6 USD as the exchange rate. The answer must be in whole "Kroner" and whole "dollars".
const usdtonokrate = 76 / 8.6;
const noktousdrate = 8.6 / 76;
const dollars = 54;
const nok = Math.round(dollars * usdtonokrate);
const dollarsfromnok = Math.round(nok * noktousdrate);

printOut("54 dollars is equal to " + nok + " Norwegian kroner.");
printOut(nok + " Norwegian kroner is equal to " + dollarsfromnok + " dollars.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a variable that contains the following text: "There is much between heaven and earth that we do not understand."
//● Print the number of characters in the text.
//● Print the character at position number 19.
//● Print the characters starting at position number 35 and 8 characters forward.
//● Print the index at which "earth" starts in the text.
const text = "There is much between heaven and earth that we do not understand.";
printOut("The number of characters in the text is: " + text.length);
printOut("The 19. character is: " + text.charAt(18));
printOut("The 8 characters starting from 35 are: " + text.substr(34, 8));
printOut("The index at which ´earth´ starts is : " + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Comparison, print the values for the following expressions (evaluate whether the statements are true):
//● Is 5 greater than 3?
//● Is 7 greater than or equal to 7?
//● Is "a" greater than "b"?
//● Is "1" less than "a"?
//● Is "2500" less than "abcd"?
//● "arne" is not equal to "thomas".
//● (2 equals 5) is this statement true?
//● ("abcd" is greater than "bcd") is this statement false?
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7))
printOut("Is \"a\" greater than \"b\"? " + ("a" > "b"));
printOut('Is "1" less than "a"? ' + ("1" < "a" === true)); 
printOut("Is \"2500\" less than \"abcd\"? " + ("2500" < "abcd"));
printOut("\"arne\" is not equal to \"thomas\". " + ("arne" != "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 == 5));
printOut("(\"abcd\" is greater than \"bcd\") is this statement false? " + ("abcd" > "bcd" == false));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert and print the following expressions:
//● from text "254" to a number
//● from text "57.23" to a number
//● from text "25 kroner" to a number
const text1 = "254";
const text2 = "57.23";
const text3 = "25 kroner";
const num1 = Number(text1);
const num2 = parseFloat(text2);
const num3 = parseFloat(text3);
printOut("\"254\" to a number is: " + num1);
printOut("\"57\".23 to a number is: " + num2);
printOut("\"25 kroner\" to a number is: " + num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360)
const r = Math.random() * 360 + 1;
const roundedR = Math.floor(r);
printOut("Random number between 1 and 360: " + roundedR)
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Use modulus (%) to calculate how many weeks and days are in 131 days.
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const daysLeft = totalDays % 7;
printOut("131 days is equal to " + weeks + " weeks and " + daysLeft + " days.");
printOut(newLine);

