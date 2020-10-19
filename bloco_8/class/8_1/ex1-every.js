const users= [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];

// create a function, that shows all people, that does not drive using the above array.
// Write your solution here

const everyPersonCanDrive  = users.every((user)=>{
    return user.inDriver === true;
});

console.log(everyPersonCanDrive);