document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const storedUser = localStorage.getItem(email);
            if (storedUser) {
                const user = JSON.parse(storedUser);
                if (user.password === password) {
                    localStorage.setItem('username', user.username);
                    window.location.href = 'dashboard.html';
                } else {
                    alert('Incorrect password. Please try again.');
                }
            } else {
                alert('No account found with that email. Please sign up.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const contact = document.getElementById('contact').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const user = {
                username,
                contact,
                password
            };

            localStorage.setItem(email, JSON.stringify(user));

            window.location.href = 'index.html';
        });
    }
});
