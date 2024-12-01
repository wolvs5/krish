'use strict';
const students = [
  {
    name: 'krish',
    id: '729832',
  },
  {
    name: 'alex',
    id: '12345',
  },
  {
    name: 'bobby',
    id: '1234567',
  },
];




const student = document.getElementById("helloworld")

for (let i = 0; i < students.length; i++) {

  const school = document.createElement("option")
  school.value = students[i].id
  school.textContent = students[i].name;
  student.appendChild(school);

}