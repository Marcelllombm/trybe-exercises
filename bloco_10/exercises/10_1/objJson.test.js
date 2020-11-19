const obj1 = require('./objJson');
const obj2 = require('./objJson');
const obj3 = require('./objJson');

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () =>{ 
  it('obj1 e igual a obj2',() => {
    expect(obj1).toEqual(obj2);
  })

  it('obj1 não e igual a obj3', () =>{
    expect(obj1).not.toEqual(obj3)
  })
})