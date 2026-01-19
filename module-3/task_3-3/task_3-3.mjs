"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1,2 ----------------------------------------------------------------------------------------------");
//Create a function that takes no parameters and returns no values. 
// print today's date in the Norwegian standard. Exs: "Friday, October 18, 2019" 
// Use example from resource: toLocaleString , Use "no-NB" as alias for the Norwegian language 
// in the function call to "toLocaleDateString"
function Part1PrintDate(){
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
    printOut(norwegianDate);
}
Part1PrintDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
//Take your "Today's Date" function from Task 1 and supercharge it! Not only should it display today's date in elegant Norwegian fashion, it also needs to return that date as a powerful date object, ready for further manipulation.
//The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
//the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends universe, launching on May 14th, 2025.
//Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
//countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a touch of visual excitement!
//Remember ● This task isn't just about coding; it's about harnessing the power of dates and functions to create something both informative and engaging. ● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable. ● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output.
function Part2PrintDate(){
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
    printOut(`<h1>Todays Date: ${norwegianDate}</h1>`); //allows u to embed expressions or variables directly into a string without "" or toString (if i understood correctly)
    return today;                                       // h1 is a header/font
}
function Part2DaysUntilMyBD(aDate){
    const BDDate = new Date('2026-04-09');
    const timeDiff = BDDate - aDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    printOut(`<h3>Days Until My Birthday: ${daysLeft} days</h3>`);
    printOut(`<p>Get ready for an unforgettable celebration!</p>`);
}
        const todayDate = Part2PrintDate();
        Part2DaysUntilMyBD(todayDate);

        

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
//Create a function that receives the radius of a circle and prints the diameter, circumference, and area.
CalculateCircle(5);
function CalculateCircle(aRadius) {
  const diameter = 2 * aRadius;
  const circumference = 2 * Math.PI * aRadius;
  const area = Math.PI * aRadius * aRadius;
  printOut(`For a circle with radius ${aRadius}:`);//bruker du " " istede for ` vil det bli printa ${aRadius}
  printOut(`
    <ul>
      <li>Diameter: ${diameter.toFixed(2)}</li>
      <li>Circumference: ${circumference.toFixed(2)}</li>
      <li>Area: ${area.toFixed(2)}</li>
    </ul>
  `);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
//Create a function that receives the width and height of a rectangle in an object. Print the circumference and area of the given rectangle.
function Rectangle(aRectangle) {
    const circumference = 2 * (aRectangle.width + aRectangle.height);
    const area = aRectangle.width * aRectangle.height;
    printOut(`For a rectangle with width ${aRectangle.width} and height ${aRectangle.height}:`);
    printOut(`
    <ul>
      <li>Circumference: ${circumference.toFixed(2)}</li>
      <li>Area: ${area.toFixed(2)}</li>
    </ul>
  `);
}
Rectangle({ width: 4, height: 7 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
// numbers and print all three combinations as integers (no decimals). Design the function to take two
// parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the other two temperature types and print them. Formula:
const ETempType = {
    Kelvin: 1,
    Celsius: 2,
    Farenheit: 3,
}

function Part5ConvertTemp(aTemp, aTempType){
    let kelvin = 0, celsius = 0, fahrenheit = 0;
    let tempTypeName = "";

    switch(aTempType){
        case ETempType.Kelvin:
            kelvin = aTemp;
            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9/5 + 32;
            tempTypeName = "Kelvin";
            break;
            case ETempType.Celsius:
                celsius = aTemp;
                kelvin = celsius + 273.15; //finner kelvin ved å bruke celsius = kelvin bare bytte fortegnet på 273.15
                fahrenheit = (celsius * 9/5) + 32; //(Celsius = (fahrenheit - 32) * 5/9) kompliert matte
                tempTypeName = "Celsius";
                break;
                case ETempType.Fahrenheit:
                    fahrenheit = aTemp;
                    celsius = (fahrenheit - 32) * 5/9;
                    kelvin = celsius + 273.15;
                    tempTypeName = "Fahrenheit";
                break;
    }
    printOut(`Convert from ${aTemp} ${tempTypeName}:`);
    printOut(`&nbsp;Kelvin: ${Math.round(kelvin)}`);
    printOut(`&nbsp;Celsius: ${celsius.toFixed(0)}`);
    printOut(`&nbsp;Fahrenheit: ${fahrenheit.toFixed(0)}`);
    printOut("");
}

Part5ConvertTemp(300, ETempType.Kelvin);
Part5ConvertTemp(26.85, ETempType.Celsius);
Part5ConvertTemp(80.33, ETempType.Fahrenheit);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
//create function that calculates price without VAT(sales tax). function needs two arguments, one for price inc. VAT (gross amount), one for tac group in text
//normal - 25%, food - 15%, hotel/transport/cinema - 10%. text argument should not be case sensitive.
//if the VAT group isnt correct, "Unknown VAT group!" should be printed. function must return price without tax, i.e., the net price.
//call the function four times with different gross amounts. one for each of the VAT groups (25,15,10), one with an unknown group, f.eks "goblins"
//use "NaN" to identify that an unknown VAT group is returned from the function. formula: net = (100 * goss) / (vat + 100).

function Part6Calculate(aGrossAmount, aTaxGroup){
    const taxGroup = aTaxGroup.toLowerCase();
    let taxRate = 0;
    switch(taxGroup){
        case "normal":
            taxRate = 25;
            break;
            case "food":
                taxRate = 15;
                break;
                case "hotel":
                case "transport":
                case "cinema":
                    taxRate = 10;
                    break;
                    default:
                        printOut("Error: Unknown tax group!")
                        return;
    }
    const netAmount = (100 * aGrossAmount) / (taxRate + 100);
    printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
    printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`); 
    printOut(`Net amount: ${netAmount.toFixed(2)}`);
    printOut("");
}
    Part6Calculate(100, "Normal");
    Part6Calculate(100, "Food");
    Part6Calculate(100, "Hotel");
    Part6Calculate(100, "Transport");
    Part6Calculate(100, "Cinema");  //gir verdi til funksjon. kan ikke være inni kodeblokka!
    Part6Calculate(100, "steam games!");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//Create function that takes 3 arguments and returns the following calculation: Speed = Distance / Time
//if speed is missing, caltulate speed, if time is missing, calculate time, if distance is missing, calculate distance. 
//if more than one parameter is missing, return NaN

function SpTiDi (aDistance, aTime, aSpeed){

if (aSpeed === null) {//calculate speed

    if( !aTime || aTime === 0  || !aDistance ){ //skjønner ikke denne setningen
        printOut("Error: Time or Distance cannot be zero or null when calculating speed!");
    return NaN;
    }
    aSpeed = aDistance / aTime;
    printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
    return aSpeed;

} else if (aTime === null){//calculate time

    if( !aSpeed || aSpeed === 0 || !aDistance){
        printOut("Error: Speed or Distance cannot be zero or null when calculating time!");
        return NaN;
    }
    aTime = aDistance / aSpeed;
    printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
    return aTime;
} else if (aDistance === null){ //calculate distance
    if( !aSpeed || !aTime){
        printOut("Error: Speed or Time cannot be null when calculating distanc!");
        return NaN;
    }
    aDistance = aSpeed * aTime;
    printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
    return aDistance;
    }
}
SpTiDi(100, 2, null); //calculate speed
SpTiDi(100, null, 50); //Calculate time
SpTiDi(null, 2, 50); // calculate distance
SpTiDi(null, null, 50); //error case

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
//create a function that takes four parameters and returns a result. parameter one: A text string. Parameter two: value for he maximum size of the text string.
//parameter three: text character. Parameter four: consecutive insertion of characters (boolean value)
// take the text parameter; if its smaller than maximum, make it larger with the specified character, either before or after, using the given boolean value.
//have the function return the new string and print it out.
function adjustString (aText, aMaxSize, aChar, aInsertAtEnd){
    let adjustedText = aText;
    let length = aText.length;
    while (length < aMaxSize){
        if(aInsertAtEnd){
            adjustedText += aChar;
        }else{
            adjustedText = aChar + adjustedText;
        }
        length++;
    }
    printOut(`Adjusted String: "${adjustedText}"`);
        return adjustedText;
    }
adjustString("Hello", 1, "<3", true); //Insert at end
adjustString("Worls", 25, "#", false); //Insert at beginning, changes when changing true or false
adjustString("This is a right aligned text.", 50, "&nbsp;", false); //right align with spaces
adjustString("huh", 100, "!", true);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
//from mathematics, we have the following expression: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 +  2 =  3             
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 +  5 +  6 =  7 +  8
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 + 10 + 11 + 12 = 13 + 14 + 15
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
//&nbsp;25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
//create a function or functions that can test this expression for 200 lines. if the test fails, print out where the two sides are not equal and stop the loop. if all 200 are ok, print "Maths fuuuuun!"
function mathExpression(aLines){
    let currentNumber = 1;
    for (let line = 1; line <= aLines; line++){
        let leftSum = 0;
        let rightSum = 0;  

        for (let i = 0; i < line + 1; i++){ //culculate left side, one more number than right side
            leftSum += currentNumber++;
        }
        for (let i = 0; i < line; i++) { //Calculate right side
            rightSum += currentNumber++;
        }
        if(leftSum !== rightSum){
            prightOut(`Test failed at line &{line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
            return;
        }
}
printOut("Maths fuuuun!"); //det kan jo ikke bli noe annent? man skriver ikke math expressionen inn noe sted??
}
mathExpression(200);
printOut(newLine);

printOut("--- Part 10 ----------------------------------------------------------------------------------------------");
//Recursive function. create function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 * 3 * 2 * 1. 
//Factorial of 5 = 5 * 4 * 3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc. Have the function call itself to calculate the result and
// print the final answer. Print result of each intermediate multiplication step as well.
let IntermediateSteps = "";
let Part10Step = 0; //dette står før function fordi...?
function Factorial(aNumber){
    if(aNumber <= 1){
        return 1;
    } else {
        const result = aNumber * Factorial(aNumber -1);
        Part10Step++;
        IntermediateSteps += `Step ${Part10Step}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
        return result;
    }
}
const numberForFactorial = 5;
const factorialResult = Factorial(numberForFactorial);
printOut(`Factorial of ${numberForFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>" + IntermediateSteps);

printOut(newLine);

