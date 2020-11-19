const sum = require('./sum');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('sum return (4,5) equal 9 // se o retorno de sum(0, 0) é 0', ()=> {
    expect(sum(4,5)).toBe(9);
  });

  it('sum return (0,0) equal 0 // se o retorno de sum(0, 0) é 0',() => {
    expect(sum(0,0)).toBe(0);
  });

  it('if the sum function throws an error when the parameters are 4 and "5" // se a função de soma gerar um erro quando os parâmetros forem 4 e "5" ', () => {
  expect(() => {
      sum(4, '5');
    }).toThrow()
  }); 

  it('if the error message is "parameters must be numbers" when making the sum call (4, "5") // se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")',() => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  })

});