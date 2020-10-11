// crie uma função que perminte enviar um email para cada pessoal cadastrada no array usado foreach

let listOfPeople = [
  'ada.lovelaca@examplo.com',
  'marie.curi@examplo.com',
  'margaret.hamilt@example.com',
  'alan.turi@example.com'
];
const sendEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso`);
};
console.log("\nModelo usado for\n");
// modelo  for
for (index = 0; index < listOfPeople.length; index += 1) {
    let emailItems= [];
    emailItems += listOfPeople[index];
    console.log(emailItems); 
    // console.log(`sua posição é: ${index}`);
  }
console.log("\nModelo usado forEach\n");
// foreEach e obrigatoramente ter um paramentro e tem dois opcionais.
listOfPeople.forEach((item, position, array)=> {
  sendEmail(item);
// no  segundo paramentro mostra a posição "position" do array
console.log(`sua posição é: ${position}`);
// percorre todas as posição do array ou mostra quantidade do array
console.log(`A quantidade das pessoas do processo é: ${array.length}`);
});