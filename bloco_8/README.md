# day 8.1
###JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

[foreach](https://www.w3schools.com/jsref/jsref_foreach.asp)

[find](https://www.w3schools.com/jsref/jsref_find.asp)

[some](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

[every](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

[sort](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Additional resources

[Qual a diferença entre as funções filter e find no javascript?](https://www.youtube.com/watch?v=_vLlU-a8-MA)

[Página do MDN sobre forEach](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[Página do MDN sobre sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## exercise forEach
1. send an email
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

 ## exercise find

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

2. find people

...
const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];
// Find the first person who doesn't know how to drive
// Write your solution here
...
 ## exercise some

 1. some people drive

...
const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];
//create a function, that shows some people, that does not drive using the above array.
// Write your solution here
...

## exercise every

1. all people drive 

...
const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];

// create a function, that shows all people, that does not drive using the above array.
// Write your solution here
...

## exercise sort

1. Put the array

...
const characters = ["D", "C", "B", "A"];

// Put the array in sort.
// Write your solution here
...

## activity

1. exercise 1

...
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

...

2. exercise 2

...
// Retorne o nome do livro de menor nome.

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
  // escreva aqui o seu código

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.equal(smallerName(), 'Duna');

...

2. exercise 2

...
// Encontre o primeiro livro cujo nome possui 26 caracteres.

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
  // escreva seu código aqui
}

assert.deepEqual(getNamedBook(), expected_result);

...