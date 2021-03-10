# Bloco 18 - Context API e React Hooks

| [day 18.01  Context API e React Hooks ]() | <br>
| [day 18.02 React Hooks - UseSate e useContext ]() | <br>
| [day 18.03 React Hooks - useEffect e Hooks customizados ]() | <br>
| [Projeto - StarWars Datatable com Context API e Hooks]() | <br>

## Bloco 18.01 - Context API e React Hooks

### Recursos adicionais (opcional) 18.1
 | [React Context & Hooks Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)<br>
 | [Documentação oficial do React sobre Context API](https://reactjs.org/docs/context.html)| <br>
 | [Entendendo a Context API do React: criando um componente de loading](https://medium.com/reactbrasil/entendendo-a-context-api-do-react-criando-um-componente-de-loading-a84f84007dc7)| <br>
 | [Types McGinnis - React Render Props](https://tylermcginnis.com/react-render-props/)| <br>
 | [Documentação oficial do React sobre Render Props](https://reactjs.org/docs/render-props.html)| <br>
 | [Uma comparação entre Context API e Redux: React Context vs Redux - Who wins?](https://www.youtube.com/watch?v=OvM4hIxrqAw)| <br>

 Por que isso é importante?

Você já aprendeu os principais conceitos que envolvem uma aplicação React: componentes, props, estado, children, proptypes, lifecycle methods etc. Aprendeu também a utilizar algumas bibliotecas externas que simplificam algumas tarefas muito frequentes em React, como roteamento e gerenciamento de estado. Com isso, você já é capaz de construir aplicações React complexas e plenamente funcionais.

Mas há mais. React possui vários recursos avançados. Não é estritamente necessário conhecê-los, mas eles podem ajudar a tornar suas aplicações mais simples, concisas e eficientes. Em alguns casos, é possível até mesmo eliminar a necessidade de utilizar uma biblioteca externa, como o Redux, para adereçar certos problemas.

A Context API é um recurso do React que permite compartilhar estado entre diversos componentes em uma árvore de componentes sem a necessidade de se passar props e callbacks manualmente entre eles ou de utilizar uma ferramenta específica para isso.
 
## Bloco 18.02 - React Hooks - useState e useContext

### Recursos adicionais (opcional) 18.2
 | [React Hooks Introduction, by Renan Lopes](https://www.youtube.com/watch?v=0pxd1DtockM)<br>
 | [React Hooks useContext, by Renan Lopes](https://www.youtube.com/watch?v=dbU-ZwDOCaE)| <br>
 | [From Class Components to Function Components](https://www.robinwieruch.de/react-hooks-migration)| <br>
 | [API de Referência dos Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html)| <br>

Por que isso é importante?
 
React Hooks são uma das mais modernas formas de se trabalhar lógicas complexas em componentes React. Eles têm adoção crescente na comunidade, resolvem problemas que a criação de componentes com classes traz e facilitam muito a vida de quem quer criar componentes, muitas vezes, mais simples. Eles são uma ferramenta fundamental para quem desenvolve ter em seu portfólio!

O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe. 

O useContext é o hook que vai te ajudar a trabalhar com a Context API . Ele funciona como um Consumer , mas de uma forma muito menos complexa e que torna seu código bem mais legível!