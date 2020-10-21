| [day 8.1](https://github.com/Marcelllombm/trybe-exercises/tree/master/bloco_8#day-81---javascript-es6---higher-order-functions---foreach-find-some-every-sort) | JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort <br>
| [day 8.2]() | [day 8.3]() | [day 8.4]() |

# day 8.1 - JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

[foreach](https://www.w3schools.com/jsref/jsref_foreach.asp)

[find](https://www.w3schools.com/jsref/jsref_find.asp)

[some](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

[every](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

[sort](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Additional resources

[Qual a diferença entre as funções filter e find no javascript?](https://www.youtube.com/watch?v=_vLlU-a8-MA)

[Página do MDN sobre forEach](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[Página do MDN sobre sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

[teste](https://github.com/Marcelllombm/trybe-exercises/tree/master/bloco_8#activity)

## exercise forEach
1. - [x] send an email
```
let listOfPeople = [
  'ada.lovelaca@examplo.com',
  'marie.curi@examplo.com',
  'margaret.hamilt@example.com',
  'alan.turi@example.com'
];
// create a function that allows you to send an email to each person registered in the array.
// write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex1-foreach.js)~~

2. - [x] Say hi my
```
const friends = ["Marcelo", "Lucas", "Maria", "Carla", "Joaquim"];

// For each friend in friends, print "Hi my friendName!"
// Write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex2-foreach.js)~~

3. - [x] Big Crazy
```
// Thats an array with big numbers we cant read 
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
// Sum all the numbers in nums and save the result in total
// Write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex3-foreach.js)~~

4. - [x] aprroved
```
const students = [
    {name:"Maria", note: 70, approved: ''},
    {name:"Samuel", note: 50, approved: ''},
    {name:"Leda", note: 81, approved: ''},
    {name:"Eliana", note: 58, approved: ''},
];
// you have a matrix that needs to be approved by students who have achieved grade 60. you should probably write a function using forEach.
// Write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex4-foreach.js)~~

 ## exercise find

 1. - [x] Find an array

 ```
const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerejas', quantity: 5}
];
// Find an object in an array by one of its properties
// Write your solution here
 ```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex1-find.js)~~

2. - [x] find people

```
const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];
// Find the first person who doesn't know how to drive
// Write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex2-find.js)~~

 ## exercise some

 1. - [x] some people drive

```
const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];
//create a function, that shows some people, that does not drive using the above array.
// Write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex1-some.js)~~

## exercise every

1. - [x] all people drive 

```
const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];

// create a function, that shows all people, that does not drive using the above array.
// Write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex1-every.js)~~

## exercise sort
#sort

1. - [x] Put the array

```
const characters = ["D", "C", "B", "A"];

// Put the array in sort.
// Write your solution here
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/class/8_1/ex1-sort.js)~~

## activity

1. - [x] exercise 1

```
// Find the name of the first author of the book born in 1947.
// Tip: use the find function.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947() {
  // escreva aqui o seu código
}

assert.equal(authorBornIn1947(), 'Stephen King');

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/exercises/8_1/exercise_1.js)~~

2. - [x] exercise 2

```
// Return the name of the book with the lowest name. 

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function smallerName() {
  let nameBook;
  // write your solution here

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.equal(smallerName(), 'Duna');

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/exercises/8_1/exercise_2.js)~~


3. - [x] exercise 3

```
// Find the first book whose name is 26 characters long.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

function getNamedBook() {
  // write your solution here
}

assert.deepEqual(getNamedBook(), expected_result);

```

~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/exercises/8_1/exercise_3.js)~~

4. - [x] exercise 4

```
// Sort books by release date in descending order.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  }
] ;

function booksOrderedByReleaseYearDesc() {
  // write your solution here
}


assert.deepEqual(booksOrderedByReleaseYearDesc(), expected_result);
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/exercises/8_1/exercise_4.js)~~

5. - [x] exercise 5

```
// 
Make a function that returns true, if all authors were born in the 20th century, or false, otherwise.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = false

function everyoneWasBornOnSecXX() {
 // write your solution here
}

assert.equal(everyoneWasBornOnSecXX(), expected_result);

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/exercises/8_1/exercise_5.js)~~

6. - [x] exercise 6

```
//  
Make a function that returns true, if any book was released in the 1980s, and false, otherwise.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = true

function someBookWasReleaseOnThe80s() {
  // write your solution here
}

assert.equal(someBookWasReleaseOnThe80s(), expected_result);

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/exercises/8_1/exercise_6.js)~~

7. - [x] exercise 7

```
// Make a function that returns true, if no author was born in the same year, and false, otherwise.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = false;

function authorUnique() {
  // write your solution here
}

assert.equal(authorUnique(), expected_result);

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_8/exercises/8_1/exercise_7.js)~~
#
#
#
# day 8.2 -