const users = [
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'Home', lastName: 'simpson', inDriver: true},
    {firstName: 'marcelo', lastName: 'simpson', inDriver: false},
    {firstName: 'rosy', lastName: 'simpson', inDriver: false},
    {firstName: 'Home', lastName: 'simpson', inDriver: true}
    
];

// faça um algoristimo que

const everyPersonCanDrive  = users.every((user)=>{
    return user.inDriver === false;
});

console.log(everyPersonCanDrive);