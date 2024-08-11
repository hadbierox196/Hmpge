// Get the search input field
const searchInput = document.getElementById('search-input');

// Get the search button
const searchButton = document.getElementById('search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
  // Get the search query from the input field
  const searchQuery = searchInput.value;

  // Redirect to Google search with the search query
  window.location.href = `https://www.google.com/search?q=${searchQuery}`;
});

// Get the menu button
const menuButton = document.getElementById('menu-button');

// Add an event listener to the menu button
menuButton.addEventListener('click', () => {
  // Toggle the menu visibility
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});

// Add event listeners to the menu items
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    // Handle the menu item click event
    switch (menuItem.textContent) {
      case 'Change background picture':
        // Open a prompt to enter the URL
        const urlPrompt = prompt('Enter the URL of the background picture');
        // Update the background image
        document.body.style.backgroundImage = `url(${urlPrompt})`;
        break;
      case 'Add bookmark':
        // Open a prompt to enter the bookmark URL and name
        const bookmarkUrl = prompt('Enter the URL of the bookmark');
        const bookmarkName = prompt('Enter the name of the bookmark');
        // Create a new bookmark element
        const bookmarkElement = document.createElement('div');
        bookmarkElement.className = 'bookmark';
        bookmarkElement.textContent = bookmarkName;
        // Add the bookmark element to the bookmarks container
        const bookmarksContainer = document.getElementById('bookmarks');
        bookmarksContainer.appendChild(bookmarkElement);
        break;
      case 'Change color':
        // Open a prompt to select a color option
        const colorOption = prompt('Select a color option (1-5)');
        // Update the background color
        document.body.style.backgroundColor = getColorOption(colorOption);
        break;
    }
  });
});

// Function to get the color option
function getColorOption(option) {
  switch (option) {
    case '1':
      return '#4567b7'; // Blue shade 1
    case '2':
      return '#5678c9'; // Blue shade 2
    case '3':
      return '#678dce'; // Blue shade 3
    case '4':
      return '#789ee3'; // Blue shade 4
    case '5':
      return '#890f98'; // Blue shade 5
    default:
      return '#4567b7'; // Default to blue shade 1
  }
}
