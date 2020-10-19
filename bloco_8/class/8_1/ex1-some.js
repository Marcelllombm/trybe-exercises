const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];
//create a function, that shows people, that does not drive using the above array.
// Write your solution here

const familyHavePersonThatDontDivre = users.some((users)=>{
  return users.inDriver === false; 
});

console.log(familyHavePersonThatDontDivre);