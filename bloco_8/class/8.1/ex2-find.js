const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];
// Find the first person who doesn't know how to drive
// Write your solution here

const firtpersonthatDontDrive = users.find((user, index)=>{
    return user.inDriver === false;
});

console.log(firtpersonthatDontDrive);