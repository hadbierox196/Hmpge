const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
const changeBgBtn = document.getElementById('change-bg-btn');
const addBookmarkBtn = document.getElementById('add-bookmark-btn');
const changeColorBtn = document.getElementById('change-color-btn');
const colorOptions = document.getElementById('color-options');
const bookmarkGrid = document.getElementById('bookmark-grid');

// Search functionality
searchBtn.addEventListener('click', () => {
  const searchQuery = searchInput.value.trim();
  if (searchQuery) {
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  }
});

// Menu functionality
menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('show');
});

// Change background picture functionality
changeBgBtn.addEventListener('click', () => {
  const bgUrlInput = prompt('Enter the URL of the background picture:');
  if (bgUrlInput) {
    document.body.style.backgroundImage = `url(${bgUrlInput})`;
  }
});

// Add bookmark functionality
addBookmarkBtn.addEventListener('click', () => {
  const bookmarkUrl = prompt('Enter the URL of the bookmark:');
  const bookmarkName = prompt('Enter the name of the bookmark:');
  if (bookmarkUrl && bookmarkName) {
    const bookmarkHTML = `
      <div class="bookmark" data-url="${bookmarkUrl}">
        <p>${bookmarkName}</p>
      </div>
    `;
    bookmarkGrid.innerHTML += bookmarkHTML;
  }
});

// Change color functionality
changeColorBtn.addEventListener('click', () => {
  colorOptions.classList.toggle('show');
});

colorOptions.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const color = e.target.dataset.color;
    document.body.style.backgroundColor = color;
  }
});

// Bookmark grid functionality
bookmarkGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('bookmark')) {
    const bookmarkUrl = e.target.dataset.url;
    window.open(bookmarkUrl, '_blank');
  }
});
