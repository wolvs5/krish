"use strict"


const form = document.querySelector('#search-form');
form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error('Error:', error);
  }
});