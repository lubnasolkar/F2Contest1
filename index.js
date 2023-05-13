let students = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];


function PrintStudentbyMap() {
    // write your code here
    // print all students with marks over 50 using .map function

    let studentsWithMarksOver50 = students.filter(student => student.marks > 50);
    let studentNamesWithMarksOver50 = studentsWithMarksOver50.map(student => student.name);
    console.log(studentNamesWithMarksOver50);
}

//  print all the students who have marks over 50 using the .forEach function
function PrintStudentbyForEach() {
  let studentsWithMarksOver50 = students.filter(student => student.marks > 50);
  studentsWithMarksOver50.forEach(student => console.log(student));
}


function addData() {
    // write your code
  let newStudent = {id: 4, name: "susan", age: "20", marks: 45};
  students.push(newStudent);
  console.log(students);
}

// remove the student who has failed, i.e. with less than 50 marks.
function removeFailedStudent() {
  students = students.filter(student => student.marks >= 50);
  console.log(students);
}


function ConcatenateArray() {
  let newStudents = [
    {id: 4, name: "susan", age: "20", marks: 45},
    {id: 5, name: "david", age: "18", marks: 65},
    {id: 6, name: "emily", age: "19", marks: 75}
  ];
  students = students.concat(newStudents);
  console.log(students);
}
