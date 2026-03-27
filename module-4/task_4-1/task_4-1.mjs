"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

//this is the one constant object  that holds account types that i use through out all the tasks
const AccountTypes = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto",
};

// This regards part 5! You can find this whole text on gitHub. its a static object that holds currency types with these properties: value, name and denomination. value is the exchange rate to NOK, name is the name of the currency and denomination is the symbol for the currency. I will use this object in the TBankAccount class to convert between currencies and to print out the correct currency symbol when depositing and withdrawing money.
const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

// this below is a class
class TBankAccount {
  #type = 0;
  #balance = 0; //these are all the privates i will need in TBankAccount(TAccount) class, i will use them in the methods below
  #withdrawCount = 0;
  #currency = null;

  constructor(aType) {
    this.#type = aType;
    this.#currency = CurrencyTypes.NOK;
  }

  #currencyConvert(aType) {
    return CurrencyTypes.NOK.value / this.#currency.value * aType.value;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    this.#withdrawCount = 0;
    let changedType = "The account type has changed from " + this.toString();
    this.#type = aType;
    changedType += " to " + this.toString();
    printOut(changedType);
  }

  getBalance() {
    return this.#balance.toFixed(2);
  }

  deposit(aAmount, aCurrencyType = CurrencyTypes.NOK) {
    this.#withdrawCount = 0;
    const exchange = this.#currencyConvert(aCurrencyType);
    const newAmount = aAmount / exchange;
    this.#balance += newAmount;
    const den = this.#currency.denomination;
    const name = aCurrencyType.name;
    printOut("Deposit of " + aAmount + " " + name + ", new balance is " + this.#balance.toFixed(2) + den);
  }

  withdraw(aAmount, aCurrencyType = CurrencyTypes.NOK) {
    switch (this.#type) {
      case AccountTypes.Pension:
        printOut("You can not withdraw from " + this.#type);
        return; //return; here is used to exit the function early if the account type is pension, since no withdraws are allowed from pension accounts
      case AccountTypes.Saving:
        this.#withdrawCount++;
        if (this.#withdrawCount > 3) {
          printOut("You can not withdraw from " + this.#type + " more than three times");
          return;
        }
        break;
    }
    const exchange = this.#currencyConvert(aCurrencyType);
    const newAmount = aAmount / exchange;
    this.#balance -= newAmount;
    const den = this.#currency.denomination; 
    const name = aCurrencyType.name;
    printOut("Withdraw of " + aAmount + " " + name + ", new balance is " + this.#balance.toFixed(2) + den);
  }

  setCurrencyType(aType) {
    if (this.#currency === aType) {
      return;
    }
    printOut("The currency has changed from " + this.#currency.name + " to " + aType.name);
    const exchange = this.#currencyConvert(aType);
    this.#currency = aType;
    this.#balance *= exchange;
    printOut("New balance is " + this.#balance.toFixed(2) + this.#currency.denomination);
  }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//create a constant object to hold account types with these properties. print all the types on a single comma,separated line
printOut (Object.values(AccountTypes).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
//create a bank account class with this structure. let the constructor of the class have a perameter value. the "toString" method should return the acc. type.
//the "setType" should set "type" to this new value and print out the change of acc type. create a constant intance of this "TAccount" class and name it "myAccount" with a "Normal" account type. change acc type to "Saving"
const myAccount = new TBankAccount(AccountTypes.Normal);
myAccount.setType(AccountTypes.Saving);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
//expand acc class to this structure (picture). "getBalance" should return the acc balance. "deposit" should increase the balance by a given amount and print the amount and the new balance. "withdraw" should decrease the balance by a given amount and print same amount and the new balance
myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
//Expand the acc with a private counter that counts the number of withdrawls like this:... use a "switch statement" to check if the acc type is "Pension" or "Saving". if the acc type is a savings acc, you cannot make more than three withdrawls.
//withdrawl counter should reset if the acc type is changed or the depposit method is used. if acc type is pension acc, no withdrawls are allowed. make sure the acc is set to "Saving" and the balance is 100, use "deposit" and "setType" if necessary
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountTypes.Pension);
myAccount.withdraw(30);
myAccount.setType(AccountTypes.Saving);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//create a nre static object as follows:... add a private currency type to the acc class and set the default value to "NOK". create a "public" "setCurrencyType" method so you can change the acc cyrrency. if this method tries to switch to a new currency o the same type as the acc already has, the method should do nothing and return. the new structure will be like this:...
//make a deposit to the acc with an amount of 150, and let the output look like this:...
myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
//expand the acc class with a private method that converts from one currency to another. use this method to change balance when currency changes. replace places where you print the balance so that is has 2 decimals.
//change the currency a few times and try to get the output to look like this:...
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);
myAccount.setCurrencyType(CurrencyTypes.EUR);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//modify "deposit" and "withdraw" methods to take an additional parameter for the currency type. if no currency type is specified, use NOK as default. make this change so that the functions print out the currency the amount is in.
//deposit 12 USD and withdraw 10GBP. change acc currency a few times and withdraw the rest of the balance with a different currency than acc is in. you should have a balance of 0.00. try to print something like this:...
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.1585, CurrencyTypes.SEK);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
myAccount.setCurrencyType(CurrencyTypes.NOK);
myAccount.setType(AccountTypes.Pension);
printOut(myAccount.getBalance());
myAccount.deposit(89);
myAccount.withdraw(50);
printOut("My account balance is " + myAccount.getBalance());
printOut(newLine);
myAccount.setType(AccountTypes.Saving);
myAccount.deposit(10000000000);

