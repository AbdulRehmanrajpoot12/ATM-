import inquirer from "inquirer"
import chalk from "chalk"

let myBalance : number = 20000;
let myPin: number = 2705;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin: ",
            type: "number",
        }
    ]
    )
if (pinAnswer.pin === myPin) {
    console.log(chalk.green.bold("Access Granted"));
    let transType = await inquirer.prompt(
        [
            {
                name: "transType",
                message: "Enter the type of transaction: ",
                type: "list",
                choices: ["Balance Inquiry", "Cash Withdrawl", "Fast Cash", "Mini Statement", "Change Pin"],
            }
        ]
    )
    if (transType.transType === "Balance Inquiry") {
        console.log(chalk.green.bold(myBalance))
    } else if (transType.transType === "Cash Withdrawl") {
        let transAmount = await inquirer.prompt(
            [
                {
                    name: "amountWithdrawl",
                    message: "Enter the amount to withdraw: ",
                    type: "number",
                }
            ]
        ) 
        myBalance -= transAmount.amountWithdrawl
        if (transAmount.amountWithdrawl <= myBalance && transAmount.amountWithdrawl % 500)
         {
            console.log(`Please receive cash Rs. ${transAmount.amountWithdrawl}. Now you current Balance is ${myBalance}.`);
        } else if (transAmount.amountWithdrawl > myBalance) 
            {console.log("You have insufficient Balance to perform this transaction")

            } else {console.log("Please enter the amount multiplied by 500")};
} else if (transType.transType === "Change Pin") { 
    
    let updatedPin = await inquirer.prompt(
        [
            {
                name: "newPin",
                message: "Enter your new pin: ",
                type: "number",
            }
        ]
    ) 
    {  
        if (updatedPin.newPin >=1000 && updatedPin.newPin <= 9999) {console.log(chalk.green.bold("Pin Updated Successfully"))
        myPin = updatedPin.newPin;
     } else console.log(chalk.red.bold("Pin should be 4 digit number, Please try again"))
    };
} else if (transType.transType === "Mini Statement") {
    console.log(chalk.green.bold("Please pick your statement:"))
} else if (transType.transType === "Fast Cash") {
     let transAmount = await inquirer.prompt(
         [
            {
                name: "amountWithdrawl",
                message: "Please select Withdrawl Amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            }
        ]) 
        {if (transAmount.amountWithdrawl === "1000") {
            console.log(`Please receive cash Rs. ${transAmount.amountWithdrawl}. Now you current Balance is ${myBalance - 1000}.`)
        } else if (transAmount.amountWithdrawl === "2000") {
            console.log(`Please receive cash Rs. ${transAmount.amountWithdrawl}. Now you current Balance is ${myBalance - 2000}.`)
        } else if (transAmount.amountWithdrawl === "5000") {
            console.log(`Please receive cash Rs. ${transAmount.amountWithdrawl}. Now you current Balance is ${myBalance - 5000}.`)
        } else if (transAmount.amountWithdrawl === "10000") {
            console.log(`Please receive cash Rs. ${transAmount.amountWithdrawl}. Now you current Balance is ${myBalance - 10000}.`)
        } else console.log(chalk.red.bold("Please select a valid amount"))
        }
    }
}  else {console.log(chalk.red.bold("Access Denied"))};

