//success
var start = 100;
var end = 200;
for (var i = start; i < end + 1; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}

// adding numbers usinf for..of loop
let total = 0;
let amounts = [61.00, 52.25, 112.99, 5.00]; 

for (let amount of amounts) {
total += amount;

}

console.log(`total is ${total}` );

//printing characters of name each letter
let name = 'Saaid'; 

for (let character of name) {
console.log(character);

}

//print reverse of strings and numbers
function reverseString(reverseMe) {
  let reversed = '';
  for(let i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i]
   }
   return reversed;
  }
  
  console.log(reverseString('Saaid Julia'));
  console.log(reverseString(`Hi,  ${reverseString('James')} ! My name is ${reverseString('Julia')}`));

//second maethod to reverse a string using higher order function
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello Saiid')); // returns 'olleh diiaS'

//printing a string couple of times you want
var sound = "" ; 
function laugh(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(3)) ; //return hahaha!

var sound = '';
function laugh(num) {
    for(let i = 0; i < num; i++) {
        sound += 'ha'
    }
    sound += '!';
    return sound;
}
console.log(laugh(5)); //return hahahahaha!

//tricky function
function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result)); //will print 4


//create a triangle using function
// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line
  var lineNumber = 1;

  for(lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle(10));

//catMessage function
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

//example of a callBack function
// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");


//changing an array using for loop
for (var index = 0; index<prices.length; index++){
  //change the value of first element
  if(index===0){
      prices[index]=11;
  }
  //change the value of third element
  else if(index===2){
      prices[index]=33;
  }
  //change the value of seventh element
  else if(index===6){
      prices[index]=77;
  }
}
console.log(prices);

//checking if an aaray has atlest 7 players, which will return boolean true or false
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(arrayInstance) {
    if (arrayInstance.length >= 7)
        return true; // true is a boolean value. Do not return a string "true"
    else 
        return false; // false is also a boolean value. Do not return a string "false"
}
console.log(hasEnoughPlayers(team));


//loop through an array
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
//donuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

//using forEach to koop through an array
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

//Prints: JELLY DONUT HOLE CHOCOLATE DONUT HOLE GLAZED DONUT HOLE

//using map to loop and return a new array
var totals = bills.map(function(bill) {
  bill *= 1.15;
  return Number(bill.toFixed(2));
})

console.log(totals);