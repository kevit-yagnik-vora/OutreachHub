document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const user = await response.json();
        console.log(user);


        if (user) {
            const JWTtoken = user.access_token;
            const payload = JWTtoken.split('.')[1];
            const decoded = atob(payload);

            localStorage.setItem('token', JWTtoken);
            localStorage.setItem('userData', decoded);
            localStorage.setItem("dialogMessage", JSON.stringify({
                text: "Login successful!",
                type: "success"
            }));
            window.location.href = '../index.html';
        } else {
            alert('Invalid username or password!');
        }

    } catch (error) {
        console.error('Login error:', error);
        alert('Something went wrong. Please try again later.');
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const msg = localStorage.getItem("dialogMessage");
    if (msg) {
        const { text, type } = JSON.parse(msg);
        showDialog(text, type);
        localStorage.removeItem("dialogMessage");
    }
});
