// 1.  Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)

    function scoreGrade(score){
        if (score < 0 || score > 400){
            console.log("This is an invalid score. There must be a mistake somewhere")
        }
        
        else if (score >= 180 && score <= 400) {
            console.log("Passed");
        }
        else {
            console.log("Failed");
        }

    }

//    function call tests for all jamb exam score possibilities 
scoreGrade(160);
scoreGrade(350);
scoreGrade(-30);
scoreGrade(450);

    
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//2.  Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".

function ageEligibility(userAge){
    if (userAge >= 18){
        console.log("You are eligible to vote");
    }
    else {
        console.log("Not eligible");
    }
}
// Testing function 
ageEligibility(10);
ageEligibility(45);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

function nameAndScore(name,score){
    if (score >= 90){
        console.log("Excellent");
    }
    else if (score >= 75){
        console.log("Good");
    }
    else if (score >= 50){
        console.log("Average");
    }
    else {
        console.log("Fail");
    }
    
}
// Testing function 
nameAndScore("Patrick",91);
nameAndScore("Chike",73);
nameAndScore("Obinna",55);
nameAndScore("mary",14);


// ---------------------------------------------------------------------------------------------------------------------------------------------------
 // 4. Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.
function idAndAgeAuthenticator(hasID,isAbove18){
    if (hasID == true && isAbove18 == true) {
        console.log("Access Granted");
    }
    else {
        console.log("Access Denied");
    }
}
// Testing function 
idAndAgeAuthenticator(true, true); 

// -------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.
let student_scores = [50,55,71,97,16,88,9,43,86,39,20,12];
for (let score of  student_scores){
    if (score >= 50){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// 6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".
const examPassCheck = (mathScore,englishScore) => {
    if (mathScore >= 50 && englishScore >= 50){
        return "Yes"
    }
    else{
        return "No"
    }
    }

// Testing function 
examPassCheck(51,23);
examPassCheck(90,79);
examPassCheck(20,11);

//---------------------------------------------------------------------------------------------------------------------------------------------------
// 7. Create a function that checks if a user has either an email or a phone number before signing up.
function signUpAuth(email,phoneNum){
    let userEmail;
    let userPhoneNum;
    for (let email_item  of emailArray){
        if (email_item === userEmailInput){
            userEmail = true;
        }
    }
    
    for (let phoneNum_item of phoneNumArray)
        {
        if (phoneNum_item === userPhoneNumInput){
            userPhoneNum = true;
        }
    }

    if (userEmail == true || userPhoneNum == true){
        return "Sign up"
    } 
    else {
        return "Email or phone number not found"
    }
}

let emailArray = ["example123@gmail.com","dummymail4@gmail.com", "crazymail@yahoo.com"];
let phoneNumArray = [09079555182,07056767654, 09156377788];
let userEmailInput = prompt("Type in  your email address:");
let userPhoneNumInput = prompt("Enter your phone number:");

//  Testing function
signUpAuth(userEmailInput,userPhoneNumInput);


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// 8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.

function usernameAndPasswordChecker(userName, passWord){
    if (userName ="" || passWord == ""){

    console.log("invalid input");
    }
    else{
        console.log("valid input");
    }

}
// creating variables to collect user input to pass  as function arguments
let  userNameInput = prompt("Please enter your username:");
let passWordInput = prompt("Please enter your password:");

// Testing function
usernameAndPasswordChecker(userNameInput, passWordInput)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.
function workHoursCalculator(number_of_hours_worked){
   return  number_of_hours_worked >= 40 ? "Full-time": "Part-time";
}
        
// Tesing  function
workHoursCalculator(20);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// 10. Write an arrow function that takes two numbers and returns the larger one.
const numRanker = (number_x,number_y) =>{
    if (number_x > number_y){
        return number_x;
    }
    else{
        return number_y
    }
}

// Testing function
numRanker(45,35);


