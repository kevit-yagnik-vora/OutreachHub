
function isJWTValid(token) {
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000); // in seconds
        return payload.exp && payload.exp > currentTime;
    } catch (e) {
        console.error("Invalid JWT token:", e);
        return false;
    }
}

function protectPage(redirectTo = '/html/login.html') {
    const token = localStorage.getItem('token');

    if (!isJWTValid(token)) {
        localStorage.removeItem('token');
        localStorage.setItem("dialogMessage", JSON.stringify({
            text: "Session Expired. Please log in again.",
            type: "warning"
        })); 
        window.location.href = redirectTo;
    }
}

function getUserFromToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

window.authGuard = {
    protectPage,
    isJWTValid,
    getUserFromToken
};
