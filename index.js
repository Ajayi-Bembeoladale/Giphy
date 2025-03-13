const apiKey = '2XHi6d8MXlS89xNfHLTeDkV0gapyeXs0'; 
const searchInput = $('#searchInput');
const searchButton = $('#searchButton');
const gifContainer = $('#gifContainer');

searchButton.on('click', () => {
  const query = searchInput.val().trim();
  if (query) {
    fetchGifs(query);
  }
});

function fetchGifs(query) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // Request is complete
      if (xhr.status === 200) { // Request was successful
        const data = JSON.parse(xhr.responseText);
        displayGifs(data.data);
      } else {
        console.error('Error fetching GIFs' );
      }
    }
  };

  xhr.send();
}

function displayGifs(gifs) {
  gifContainer.empty(); // Clear previous results
  gifs.forEach(gif => {
    const img = $('<img>', {
      src: gif.images.fixed_height.url,
      alt: gif.title,
    });
    gifContainer.append(img);
  });
}