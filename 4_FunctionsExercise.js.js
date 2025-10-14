// Exercise 1.
function logGreeting(){
    console.log("Hello");
}
logGreeting();

// Exercise 2.
function getName(){
   return"Redu"
}
console.log(getName())

// Exercise 3.
function logGreeting2(){
    console.log(`hello my name is ${getName()}`)
}
logGreeting2()

// Exercise 4.
function num4(a,b,c){
    return a+b+c
    }
 console.log(num4(3,5,6))

 // Exercise 4.
 function discount(age){ 
  if (age <= 14){
    return true;
} else {
   return false;
}
} 
console.log(discount(15))

 // Exercise 6.
function repeatString(num, str){
    for (let i = 0; i<num; i++){
        console.log(str)
    }
}

// Exercise 7. 

// I was a bit confused about the value of z, but I understood that y is 4.
// After running the code, I see that the function multiplies any input by 2.


// Exercise 8. 
// 1. mysteryFunction2 returns p1 - p2  
// 2. The value of a is 6  
// 3. The value of b is 5  
// I was correct — the value of b was a bit confusing at first, but I figured it out.

// Exercise 9. 

const groceryList = "eggs,carrots,orange juice";
const groceryArray = groceryList.split(",");
console.log(groceryArray); // ["eggs", "carrots", "orange juice"]

const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
const scheduleArray = mySchedule.split("--->");
const firstTwo = scheduleArray.slice(0, 2);
console.log(firstTwo); // ["wake up", "brush teeth"]

//A beginners guide to modern JavaScript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//youtub
