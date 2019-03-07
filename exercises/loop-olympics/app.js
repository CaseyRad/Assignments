var numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(i);
}
console.log(numbers);


for (let i = 9; i >= 0; i--) {
    console.log(i);   
}

var fruit = [ 'banana', 'orange', 'apple', 'kiwi']

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
    
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var otherFruit = [];
for (let i = 0; i < fruit.length; i+=2) {
   // if (i % 2 != 1)
    otherFruit.push(fruit[i]);
}
console.log(otherFruit);

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  var namesArray = [];
  var occupationsArray = [];

  for (let i = 0; i < peopleArray.length; i++) {     console.log(peopleArray[i].name);  
  }
  for (let i = 0; i < peopleArray.length; i++) {
      namesArray.push(peopleArray[i].name);
      occupationsArray.push(peopleArray[i].occupation);
  }
  console.log(namesArray);
  console.log(occupationsArray);

var everyOtherName = [];
var everyOtherOccupation = [];

for (let i = 0; i < peopleArray.length; i++){
    everyOtherName.push(peopleArray[i].name);
    everyOtherOccupation.push(peopleArray[i+=1].occupation);
}
console.log(everyOtherName);
console.log(everyOtherOccupation);
