// criando um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// criando uma variavel para armazenar
let result = 0;

//função para achar ser o array é impar
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    result += 1;
  }
}
//função se for par
if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}