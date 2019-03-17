
// setInterval(function(){
//     console.log('hello');
// }, 1000)

// const intervalID = setInterval(function(){
//     console.log('hello!')
// }, 1000) 

// clearInterval(intervalID) 

const numbers = [1, 3, 5, 2, 90, 20];

function leastToGreatest(arr){
   return arr.sort((a, b)=> a - b); 
}
 console.log(leastToGreatest(numbers))

 function greatestToLeast(arr) {
     return arr.sort((a, b) => b - a);
 }

 console.log(greatestToLeast(numbers));

 const animals = ["dogs", "cats", "turtles", "penguins"]
 
 function alphabetical(arr) {
     return arr.sort();

 }
  console.log(alphabetical(animals))

function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length)
}

console.log(lengthSort(animals));
