// criando um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//criando uma variavel para guardar valor
let sumAll =0;

// percorrendo um array e imprimindo o valores
for(let cont = 0; cont < numbers.length; cont++ ){
    sumAll += numbers[cont];
  
}
// criando um variavel que mostra o valor todal do elemento do numbers
let amountNumbers= numbers.length;


// pegando o valor total o array e divido pelo numero do elemento do numbers
let averageArihmetic =  sumAll / amountNumbers;
console.log(averageArihmetic);