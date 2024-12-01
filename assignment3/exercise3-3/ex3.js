'use strict';
const names = ['John', 'Paul', 'Jones'];


const name = document.getElementById("helloworld")


for (let i = 0; i < names.length; i++){
  const li = document.createElement("li");
  li.textContent = names[i];
  name.appendChild(li);
}