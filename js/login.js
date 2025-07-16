document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    try {
        const response = await fetch('https://687614dc814c0dfa653a8c62.mockapi.io/user');
        const users = await response.json();

        const matchedUser = users.find(user => user.email === email && user.password === password);

        if (matchedUser) {
            const fakeJWT = btoa(`${matchedUser.id}:${matchedUser.email}:${Date.now()}`);

            localStorage.setItem('token', fakeJWT);
            localStorage.setItem('userData', JSON.stringify(matchedUser));
            alert('Login successful!');
            window.location.href = '../index.html';
        } else {
            alert('Invalid email or password!');
        }

    } catch (error) {
        console.error('Login error:', error);
        alert('Something went wrong. Please try again later.');
    }
});

