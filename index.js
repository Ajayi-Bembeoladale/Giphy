const apiKey = `2XHi6d8MXlS89xNfHLTeDkV0gapyeXs0` ; // Replace with your Giphy API key
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const gifContainer = document.getElementById('gifContainer');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchGifs(query);
  }
});

function fetchGifs(query) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}=${query}&limit=10`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayGifs(data.data);
    } else {
      console.error('Error fetching GIFs:', xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('Request failed');
  };
  xhr.send();
}

function displayGifs(gifs) {
  gifContainer.innerHTML = ''; // Clear previous results
  gifs.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif.images.fixed_height.url;
    img.alt = gif.title;
    gifContainer.appendChild(img);
  });
}