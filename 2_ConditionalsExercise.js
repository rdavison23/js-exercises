// EXERCISE 1.
function exercise1(num1) {
    let answer1 = "";
    // ------------------------------------------
    // Write your code for exercise 1 below here:
    // ------------------------------------------
       answer1 = 23
    // ------------------------------------------
    // And above here
    // ------------------------------------------
    return answer1;
}
// EXERCISE 2.
function exercise2(num2) {
    let answer2;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
        if (num2 % 2 === 0){
            answer2 = ("even");
        } else {
            answer2 = ("odd")
        }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer2;
}

// EXERCISE 3.
function exercise3(num3) {
  let answer3;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
     if(num3 > 0){
     answer3 = ("is positive");
    } else if (num3 < 0 ) {
     answer3 = ("is negative")
        } else {
     answer3 = (("is zero"))
        }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer3;
}

// EXERCISE 4.
function exercise4(varA, varB) {
    let answer4;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if(varA === varB) {
        answer4 = "varA and varB are equal";
    } else {
        answer4 = "varA and varB differ"
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer4;
  }
 
  // EXERCISE 5.
/* Example: if varA = 5 and varB = "5", they both represent the number 5, but one is a number and the other is a string. So they are not strictly equal.
Another example: varA = false and varB = 0 — both are falsy values, but they are different types (boolean vs number), so they are not strictly equal either. */

  // EXERCISE 6.
function exercise6(varA, varB, varC) {
    let answer6 = "unassigned";
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (varA === varB) {
     answer6 = true;
    } else if (varA === varC ||varB === varC) {
     answer6 = false 
    }
    // ------------------------------------------
    // And above here
    // --------------------------------------------
    return answer6;
}

// EXERCISE 7.
function exercise7(num7) {
    let answer7;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
        switch(num7) {
           case 1:
           console.log( "You won!");
        break;
        case 7:
           console.log("You are lucky!")
        break;
        case 101:
            console.log("Welcome to coding 101!")
        case 1000000:
            console.log("You are one in a million!")
            break;
        default:
            console.log("thanks for that!") 
        
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer7;
  }
}

// EXERCISE 8.
function exercise8(amount1, amount2, minimum, maximum) {
    let answer8;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (amount1 >= minimum && amount1 <= maximum &&
        amount2 >= minimum && amount2 <= maximum) {
      answer8 = true;
    } else {
      answer8 = false;
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer8;
    }
}

// EXERCISE 9.
function exercise9(num9) {
    let answer9;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if (typeof num9 === "number") {
    switch(num9) {
         case 1:
          answer9 = "You won!";
          break;
        case 7:
           answer9 ="You are lucky!"
          break;
        case 101:
            answer9 = "Welcome to coding 101!"
          break;
        case 1000000:
           answer9 ="You are one in a million!"
            break;
        default:
            answer9 ="thanks for that!"
    }
 } else { 
   answer9 = `Please send a number, that was a ${typeof num9}`;
}
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer9;
  }
// EXERCISE 10.
  function exercise10(num10) {
    let answer10;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
      if (num10 % 15 === 0) { 
        answer10 = "Fizz Buzz";
      } else if (num10  %3 === 0){
        answer10 = "Fizz";
      }  else if(num10  %5 === 0){
        answer10 = "Buzz";
      } else {

      }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer10;
  }