document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const usernamePlaceholder = document.getElementById('username-placeholder');
    if (username && usernamePlaceholder) {
        usernamePlaceholder.textContent = username;
    }
});
