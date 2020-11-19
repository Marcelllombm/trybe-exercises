#10.1 Primeiros passos no Jest
| [Jest](https://jestjs.io/) |<br> 
Existem várias ferramentas semelhantes, como:
| [Mocha](https://mochajs.org/) |<br>
| [Jasmine](https://jasmine.github.io/) |

Se integra muito bem com React. De fato, Jest já vem instalado e configurado com o
| [Create React App.](https://github.com/facebook/create-react-app) |

```
// Como instalar
// verificar se existe npm
npm -v

// instalar caso não existe
// atualizar a lista de repositorios
sudo apt update

// instalar o npm
sudo apt install npm

// esse comando irá instalar tudo o que é necessario para o jest
npm install --save-dev jest


// adicinar no arquivo package.json
{
    "scripts": {
      "test": "jest --watch"
    }
  }
// --watch transforma o teste em automatico quando eu salvo o arquivo
```
## Additional resources
| [Conhecendo o Jest](https://medium.com/jaguaribetech/testando-seu-javascript-com-jest-de2a4674f4ad) |<br>
| [Export Module in Node.js](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports) |<br>
| [Jest Crash Course - Unit Testing in JavaScript](https://www.youtube.com/watch?v=7r4xVDI2vho) |<br>
| [Objetos - Referências de valores em JavaScript](https://blog.da2k.com.br/2017/01/25/objetos-referencias-de-valores-em-javascript/) |<br>
| [Migrating from Mocha to Jest](https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50) |<br>
| [Comparações de igualdade e uniformidade](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness) |<br>

(Expect e matchers)https://jestjs.io/docs/en/expect]
```


// test('mensagem de teste', blocoDeAsserção, timeout)

1 parametro= mensagem de teste
2 parametro = callback da função de asserções igual a Match
3 parametro = tempo que a função tem para se execultada 

test('Teste que ao chamar convertRoman(1) a saída deve ser I',() => {  
  // espero que ao chamar a função convertaToRoman(1) o retorno seja I
  expect(convertToRoman(1)).toBe('I');
});


// separa os testes em bloco
describe('mensagen ', callback)

describe('convert numbers from 1 a 4',()=:{

  test('if convertRoman using 1 return  I',() => {  
  // espero que ao chamar a função convertaToRoman(1) o retorno seja I
  expect(convertToRoman(1)).toBe('I');
});

// ou 

it('should return "II" if converToRoman is called using 2',() => {
  // deve returno II se a função espero chamar 2
  expect(convertToRoman(1)).toBe('I');
});

}); 


```
toBe <br>
toThrow <br>
toEqual <br>
toBeFalsy <br>
toBeDefined <br>
toBeTruthy

# Jest - Testes Assíncronos

### Testando códigos assíncronos
| [Leia esse artigo ](https://deltice.github.io/jest/docs/pt-BR/asynchronous.html#content)<br> |
| [videos](https://www.youtube.com/watch?v=Y4PHrT6Cc_A) |

## Additional resources
| (Jest - Testing Asynchronous Code - Video)[https://www.youtube.com/watch?v=Y4PHrT6Cc_A] |<br>
| (Testing Asynchronous Code)[https://jestjs.io/docs/en/asynchronous] | <br>
| (An Async Example)[https://jestjs.io/docs/en/tutorial-async] | <br>
| (Setup and Teardown)[https://jestjs.io/docs/en/setup-teardown] | <br>
| (Jest - Setup and Teardown - Video)[https://www.youtube.com/watch?v=wWx9uZa-Wnk] | <br>

toHaveLength