// Exercise 1.
let i = 1
while (i <= 0){
    console.log(i)
    i++
}
// Exercise 2.
let j = 0;
do {
    console.log(j);
    i++
} while (1< j)

// Exercise 3.
let b = 1
for (let b= 1;b <= 5; b++ ){
    console.log(b)
}

// Exercise 4.
let num = 10
while(num >= 1){
    console.log(num) 
    num--
}

let num1 = 10
do {
    console.log(num1)
    num1--
} while ( num1 >= 1)

 
for (let num2 = 10; num2 >= 1; num2--){
    console.log(num2)
}

// Exercise 5.
let num5 = 27;
while(num5 <=7) {
    console.log(num5)
    num5--
}

do{
    console.log(num5)
    num5--
} while (num5 >= 7)

for (let num5 = 10; num5 >=7; num5 --){
    console.log(num5)
}

// Exercise 6.
let num6 = 10;
while (num6 <= 100) {
    console.log(num6)
    num6 += 10
}

do {
    console.log(num6)
    num6 += 10
} while (num6 <= 100)

for(let num6 = 10; num6 <= 100; num6 += 10){
    console.log(num6)
}

//Exercise 7.
// This loop was infinite because counterFour kept decreasing and never reached 2 

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8.
let fav = 23 
for (f = 0; f <=fav;f++) {
 console.log(f)
}

// Exercise 9.
let fav1 = 72;
for (let i = 0; i <= 100; i++)
if (i === fav1){
    console.log(`${i} my favorite number`)
} else {
 console.log(`${i}not my favorite number`)
}

// Exercise 10. I think I would try to pick a loop that makes the code easier to read and makes more sense.
// I'm still learning about loops, but when I know ahead of time how many times I want to loop, I would use a for loop.
// When I'm not sure how many times the loop should run, I would use a while loop.

// Exercise 11.

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
    console.log("counting down from", outsideCounter);
    for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter-- ) {
      console.log("inside", insideCounter);
    }
    console.log("***********************************");
  }
  
  //A beginners guide to modern JavaScript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//youtub
