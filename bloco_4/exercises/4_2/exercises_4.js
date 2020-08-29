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

// usado if para desculbri se e o numero maior que 20 ou menor
if(averageArihmetic > 20 ){
    console.log("Valor maior que 20!!!")
}else{
    console.log("Valor menor que 20!!!")
}