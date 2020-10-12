const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerejas', quantity: 5}
];
// Find an object in an array by one of its properties
// Write your solution here
const firstFind = (first => {
   return first.name === 'cerejas';
});

console.log(inventory.find(firstFind));