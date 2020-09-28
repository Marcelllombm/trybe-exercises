const customer = {
    firsName: 'Roberto',
    lastName:'Faria',
    age:22,
    job: 'Teache'
};
// adicionar uma propriedade de maneira simple no objeto
customer.mbm  = 'Marcelo Borges';
//console.log(customer);

// adicionar outro key ou  propriedade de maneira simple no objeto
customer['lbm']='Lèda borges';
//console.log(customer['mbm']);

const customer2 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

let newKey = 'lastName';
const lastName = 'Ferreira';
customer2[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer2.firstName} ${customer2.lastName}`;
customer2[newKey] = fullName;
console.log(customer2)