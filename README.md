
# GIPHY API PROJECT

This project is a simple web application that allows users to search for GIFs using the Giphy API. It is built using HTML, CSS, and JavaScript (with jQuery for simplification). Users can enter a search term, and the application will display a list of relevant GIFs fetched from the Giphy API.


## Features

- Search for GIFs: Enter a keyword or phrase to search for GIFs.

- Display GIFs: The application displays up to 10 GIFs related to the search term.

- Responsive Design: The layout is responsive and works on both desktop and mobile devices.

- Error Handling: Proper error handling for network issues or API failures.

## Technologies Used

-  **HTML**: For structuring the web page.

- **CSS**: For styling the web page and making it visually appealing.

- **JavaScript**: For handling user interactions and making API requests.

- **Giphy API**: For fetching GIFs based on user input.

- **JQuery** : For simplifying DOM manipulation.

- **Babel** :  For converting ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- **eslint** : For handling errors
## How To Use

1. Get a Giphy API Key:

    - Go to [Giphy](https://developers.giphy.com) Developers.

    - Sign up and create an app to get your API key.

2. Set Up the Project:

    - Clone this repository or download the project files.

    - Open the index.html file in your browser.

3. Enter Your API Key:

    - Open the script.js file.

    - Replace **apikey** with your actual Giphy API key.

4. Search for GIFs:

    - Enter a search term in the input field and click the "Search" button (or press Enter).

    - The application will display relevant GIFs below the search bar.
## Code Structure

**Files:**
- index.html: The main HTML file containing the structure of the web page.

- styles.css: The CSS file for styling the web page.

- script.js: The JavaScript file for handling user interactions and API requests.

**Key Functions:**
- fetchGifs(query):

Sends a request to the Giphy API to fetch GIFs based on the search query.

Uses XMLHttpRequest or fetch to make the API call.

displayGifs(gifs):

Takes an array of GIF objects and displays them on the web page.

Clears previous results before displaying new ones.

Error Handling:

Handles network errors and API failures gracefully.

Displays error messages in the console or on the web page.
## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.


## Acknowledgements

 - [Giphy]([https://developers.giphy.com]) for providing the API.
 - [Jquery](https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js) for simplifying Javascript code.
 


## Contacts

For questions or feedback, feel free to reach out:

Email: ajayioladale8@example.com

GitHub: Ajayi-Bembeoladale