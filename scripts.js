// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settings-btn');
    const addBookmarkButton = document.getElementById('add-bookmark-btn');
    const bookmarksContainer = document.getElementById('bookmarks-container');

    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            alert('Settings clicked!');
        });
    }

    if (addBookmarkButton) {
        addBookmarkButton.addEventListener('click', function() {
            const bookmark = document.createElement('div');
            bookmark.className = 'bookmark';
            bookmark.textContent = 'New Bookmark';
            bookmarksContainer.appendChild(bookmark);
        });
    }
});
