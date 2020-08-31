// criando um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//criando uma variavel para guardar valor
let sumAll =0;

// percorrendo um array e imprimindo o valores
for(let cont = 0; cont < numbers.length; cont++ ){
    sumAll += numbers[cont];
  
}
console.log(sumAll);