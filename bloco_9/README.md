| [day 9.1]() | <br>
| [day 9.2]() | <br>
| [Projeto]() | <br>

# Day 9.1 JavaScript Assíncrono e Callbacks

[Operações assíncronas](https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async)
[Callbacks - artigo](https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22)
[setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)

## Additional resources
[Marie Chatfield — What is asynchronous code execution?](http://mariechatfield.com/tutorials/explanations/asynchronous-code.html)
[Medium - JavaScript: What the heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced?gi=fca5d5153b70)
[MDN - Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

### exercise

1. - [x] getUser - No código abaixo você tem a função getUser, que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

```
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};

assert.equal(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser
No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.
Copiar
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

```
~~[problem solution]()~~