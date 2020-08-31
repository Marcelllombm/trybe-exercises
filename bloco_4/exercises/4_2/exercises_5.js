// criando um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// criado um variavel para armazenar
let higherNumbers = 0;

// criado um lop para saber o maior e guarda o numero maior com o if 
for (let cont = 0; cont < numbers.length; cont +=1){
    if(numbers[cont] > higherNumbers){
        higherNumbers = numbers[cont];
   }  
}
console.log(higherNumbers)