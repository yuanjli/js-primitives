
//1. 
var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];


friends.sort();
friends.reverse();

console.log(friends);

var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];
var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];

var totalFriends = myFriends.concat(yourFriends);
totalFriends.sort();
console.log("the total friends is ", totalFriends, totalFriends.length);


var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

var rankPho = foods.indexOf('Pho');

console.log(rankPho);

//7. 
var num1 = foods.indexOf('Donuts');
foods.splice(num1, 1,);
console.log(foods);

//8.
console.log(foods[4], foods[9]);


//9.
var word = "Space";
word ="spice";

//10. 
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
var med = ages.length / 2
ages.sort();
med = med - (med % 1)

console.log(med, ages[med]);

















