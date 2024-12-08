'use strict'


const form = document.querySelector('#search-form');
const resultsContainer = document.getElementById('helloword');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.querySelector('input[name=q]').value;
  resultsContainer.innerHTML = '';

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    data.forEach((tvShow) => {
      const show = tvShow.show;
      const article = document.createElement('article');
      const name = document.createElement('h2');
      name.textContent = show.name;
      article.appendChild(name);

      if (show.url) {
        const link = document.createElement('a');
        link.href = show.url;
        link.target = '_blank';
        link.textContent = 'Details';
        article.appendChild(link);
      }

      if (show.image?.medium) {
        const image = document.createElement('img');
        image.src = show.image.medium;
        image.alt = show.name;
        article.appendChild(image);
      }

      if (show.summary) {
        const summary = document.createElement('div');
        summary.innerHTML = show.summary;
        article.appendChild(summary);
      }
      resultsContainer.appendChild(article);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    resultsContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
  }
});