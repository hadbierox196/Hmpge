document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settings-btn');
    const settingsMenu = document.getElementById('settings-menu');
    const addBookmarkButton = document.getElementById('add-bookmark-btn');
    const bookmarksContainer = document.getElementById('bookmarks-container');

    // Toggle settings menu visibility
    settingsButton.addEventListener('click', function() {
        if (settingsMenu.style.display === 'block') {
            settingsMenu.style.display = 'none';
        } else {
            settingsMenu.style.display = 'block';
        }
    });

    // Add new bookmarks
    addBookmarkButton.addEventListener('click', function() {
        const bookmarkName = prompt('Enter bookmark name:');
        if (bookmarkName) {
            const bookmark = document.createElement('div');
            bookmark.className = 'bookmark';
            bookmark.textContent = bookmarkName;
            bookmarksContainer.appendChild(bookmark);
        }
    });

    // Hide settings menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
            settingsMenu.style.display = 'none';
        }
    });
});
