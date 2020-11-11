| [day 9.1 JavaScript Assíncrono e Callbacks](https://github.com/Marcelllombm/trybe-exercises/tree/master/bloco_9#day-91-javascript-ass%C3%ADncrono-e-callbacks) | <br>
| [day 9.2 JavaScript Promises](https://github.com/Marcelllombm/trybe-exercises/tree/master/bloco_9#day-92-javascript-promises) | <br>
| [Projeto]() | <br>

# Day 9.1 JavaScript Assíncrono e Callbacks

| [Operações assíncronas](https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async) |  
[Callbacks - artigo](https://medium.com/totvsdevelopers/ entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22) |  
[setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) |

## Additional resources
| [Marie Chatfield — What is asynchronous code execution?](http://mariechatfield.com/tutorials/explanations/asynchronous-code.html) |
[Medium - JavaScript: What the heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced?gi=fca5d5153b70) |
[MDN - Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) |

### exercise

1. - [x] observer

```
// Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_9/exercises/9_1/exercise_1.js)~~

2. - [x] observer 2

```
// Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

``` 
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_9/exercises/9_1/exercise_2.js)~~

3. - [x] setTimeout

```
// A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_9/exercises/9_1/exercise_3.js)~~

4. - [x] setTimeout

```
// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.,

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_9/exercises/9_1/exercise_4.js)~~

5. - [x] setTimeout

```
// Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...


sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_9/exercises/9_1/exercise_5.js)~~

6. - [x] setTimeout

```
// Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
```
~~[problem solution](https://github.com/Marcelllombm/trybe-exercises/blob/master/bloco_9/exercises/9_1/exercise_6.js)~~

| [day 9.1 JavaScript Assíncrono e Callbacks](https://github.com/Marcelllombm/trybe-exercises/tree/master/bloco_9#day-91-javascript-ass%C3%ADncrono-e-callbacks) | <br>
| [day 9.2 JavaScript Promises](https://github.com/Marcelllombm/trybe-exercises/tree/master/bloco_9#day-92-javascript-promises) | <br>
| [Projeto]() | <br>

# Day 9.2 JavaScript Promises
 
 | [APIs](https://medium.com/@perrysetgo/what-exactly-is-an-api-69f36968a41f) | ()[]
 
## Additional resources

 | [Async JavaScript: From Callbacks, to Promises, to Async/Await](https://ui.dev/async-javascript-from-callbacks-to-promises-to-async-await/) | [A simple guide to promises](https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a) | [Asynchronous JavaScript: From Callback Hell to Async and Await](https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial) | [The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await](https://www.freecodecamp.org/news/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40/) | [An Overview of JavaScript Promises](https://www.sitepoint.com/overview-javascript-promises/) | [fetch() - Working With Data & APIs in JavaScript](https://www.youtube.com/watch?v=tc8DU14qX6I) | 