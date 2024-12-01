"use strict"

const ul = document.getElementById('helloworld');

const li1 = document.createElement('li')
li1.textContent = "first item"
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.textContent = "second item"
ul.appendChild(li2)
li2.classList.add("my-item");

const li3 = document.createElement('li')
li3.textContent = "third item"
ul.appendChild(li3)