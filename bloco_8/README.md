# day 8.1
###JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

[foreach](https://www.w3schools.com/jsref/jsref_foreach.asp)

[find](https://www.w3schools.com/jsref/jsref_find.asp)

[some](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

[every](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

[sort](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

# exercise forEach
1. send an email
 ...
let listOfPeople = [
  'ada.lovelaca@examplo.com',
  'marie.curi@examplo.com',
  'margaret.hamilt@example.com',
  'alan.turi@example.com'
];
// create a function that allows you to send an email to each person registered in the array.
// write your solution here
...

2. Say hi my
...
const friends = ["Marcelo", "Lucas", "Maria", "Carla", "Joaquim"];

// For each friend in friends, print "Hi my friendName!"
// Write your solution here
...

3. Big Crazy
...
// Thats an array with big numbers we cant read 
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
// Sum all the numbers in nums and save the result in total
// Write your solution here
...

4. aprroved
...
const students = [
    {name:"Maria", note: 70, approved: ''},
    {name:"Samuel", note: 50, approved: ''},
    {name:"Leda", note: 81, approved: ''},
    {name:"Eliana", note: 58, approved: ''},
];
// you have a matrix that needs to be approved by students who have achieved grade 60. you should probably write a function using forEach.
// Write your solution here
...

 # exercise find

 1. Find an array

 ...
const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerejas', quantity: 5}
];
// Find an object in an array by one of its properties
// Write your solution here
 ...

 # exercise find

 1. driver

...
const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];
//create a function, that shows people, that does not drive using the above array.
// Write your solution here
...