//Exercise 1. 
let animal = [];

//Exercise 2.
animals.push("frog");

//Exercise 3.
animals.push("cat", "dog", "elephant", "tiger");

//Exercise 4.
animals.push("cat", "dog", "elephant", "tiger");

//Exercise 5.
console.log(animals.length);

//Exercise 6.
console.log(animals[0]);

//Exercise 7.
console.log(animals[animals.length - 1]);

//Exercise 8.
animals.pop();

//Exercise 9.
let assortedThings = ["apple", "book", "sun", 42, 7, 100];

//Exercise 10.
let assortedThings1 = ["potato", 4, "Hello World", 99, "sunshine", 7];

for (let i = 0; i < assortedThings.length; i++) {
  console.log(`Item #${i} is ${assortedThings[i]}`);
}

//Exercise 11.
function labelNumbers(arr) {
    for (let num of arr) {
      if (num > 100) {
        console.log(`${num} BIG`);
      } else if (num >= 0 && num <= 100) {
        console.log(`${num} small`);
      } else {
        console.log(`${num} negative`);
      }
    }
  }
  
  labelNumbers([-2, 200, 50]);
  labelNumbers([0, 101, -50, 75]);
  
//Exercise 12.
  let me = {
    name: "Redu",
    favoriteAnimal: "Lion",
    favoriteNumber: 23
  };
  
  //Exercise 13.
  me.hobby = "painting";
me.city = "Seattle";

  //Exercise 14.
me.favoriteAnimal = "dog";

  //Exercise 15.
console.log(me.favoriteAnimal);     
console.log(me["favoriteAnimal"]);  

//A beginners guide to modern JavaScript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//youtub

