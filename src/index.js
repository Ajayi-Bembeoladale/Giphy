import './css/style.css';

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
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=100`;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // Request is complete
      if (xhr.status === 200) { // Request was successful
        const data = JSON.parse(xhr.responseText);
        if (data.data.length === 0) {
          // No GIFs found
          displayError('No GIFs found. Try a different search term!');
        } else {
          // Display GIFs
          displayGifs(data.data);
        }
      } else {
        // Server error (e.g., 404, 500)
        displayError('Error fetching GIFs. Please try again later.');
      }
    }
  };

  xhr.onerror = function () {
    // Network error (e.g., no internet connection)
    displayError('Network error. Please check your internet connection.');
  };

  xhr.send();
}

function displayGifs(gifs) {
  gifContainer.empty(); // Clear previous results
  
  // Create a wrapper div to hold the grid
  const gridContainer = $('<div>', { class: 'gif-grid' });

  gifs.forEach(gif => {
    const gifWrapper = $('<div>', { class: 'gif-item' }); // Create a wrapper for each image
    const img = $('<img>', {
      src: gif.images.fixed_height.url,
      alt: gif.title,
    });
    
    gifWrapper.append(img); // Append the image to the wrapper
    gridContainer.append(gifWrapper); // Append the wrapper to the grid container
  });

  gifContainer.append(gridContainer); // Append the grid container to the gifContainer
}

function displayError(message) {
  gifContainer.empty(); // Clear previous results
  gifContainer.append(`<p style="color: red; text-align: center;">${message}</p>`);
}