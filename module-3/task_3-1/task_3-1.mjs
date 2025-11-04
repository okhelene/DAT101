"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Complete the given "if" statement so that it matches this: If I wake up at exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time

let wakeUpTime = 10;
printOut("Wake up time = " + wakeUpTime);
if (wakeUpTime <= 7) {
  printOut("I can catch the bus");
}
else if (wakeUpTime === 8) {
  printOut("I can take the train");
}
else {
  printOut("I have to take the car");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Write an if statement that checks whether an integer variable is negative or positive, print the text "Positive" or "Negative" accordingly. Run the program with different types of values for the variable to check the if statement
let number = 0;
printOut("Number = " + number);
if (number > 0) {
  printOut("Positive");
} 
else if (number === 0) {
printOut("Zero");
}
else {
  printOut("Negative");
}
printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
//Imagine you have a photo editing profession. And you have a website where people can upload pictures for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them. Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the size is equal to or greater than the limit. Otherwise, print out "The image is too small"
const ImgMB = Math.floor(Math.random() * 8) + 1;
//ImgMB should have no more than two decimals 
printOut(ImgMB);
if (ImgMB <= 4) {
  printOut("The image is too small")
//over 6 print out "image is too big"
}
else if (ImgMB >= 6) {
  printOut("The image is too big")
}
else {
  printOut("thank you")
}
printOut(newLine);

printOut("--- Part 8 and 9 ----------------------------------------------------------------------------------------------");
//use the code in the Task sheet:
const monthList =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
//Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D"
printOut(monthName);
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
}
//Expand exercise 8 to print how many days there are in the current month. And do not use date object.
//Print how many days in each month in monthName
let days;
switch (monthName) {
  case "February":
    days = 28;
    break;
    case "January":
      case "March":
        case "May":
          case "July":
            case "August":
              case "October":
                case "December":
                  days = 31;
                  break;
    case "April":
      case "June":
        case "September":
          case "November":
            days = 30;
            break;
            default: days = 0; //fjerner du alle månedene som har 31 dager kan du skrive 31 som default så alle som ikke er nevnt blir 31
}
printOut("There are " + days + " days in " + monthName);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
//Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from March through May, but in April you have temporary premises in the building next door. Use the month constant in exercise 8 to inform the status of your gallery in that month
//use if commands
let galleryStat;
switch (monthName) {
  case "March":
    case "May":
    galleryStat = "the gallery is closed";
    break;
    case "April": 
    galleryStat = "the gallery is open in temporary premises";
    break;
    default: galleryStat = "the gallery is open";
}
printOut("in " + monthName + ", " + galleryStat);
printOut(newLine);
