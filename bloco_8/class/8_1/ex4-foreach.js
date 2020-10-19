const students = [
    {name:"Maria", note: 70, approved: ''},
    {name:"Samuel", note: 50, approved: ''},
    {name:"Leda", note: 81, approved: ''},
    {name:"Eliana", note: 58, approved: ''},
];
// you have a matrix that needs to be approved by students who have achieved grade 60. you should probably write a function using forEach.
// Write your solution here
students.forEach((student) => {
  if(student.note >= 60){
    student.approved = 'Aprovado';
  }else {
    student.approved = 'reprovado';
  }
  console.log(student);
});
