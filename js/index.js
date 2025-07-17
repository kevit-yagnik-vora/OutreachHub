const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('userData'));

if (!token || !user) {
  window.location.href = './login.html';
} else {
  document.getElementById('username').textContent = user.name;
}

document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userData');
  localStorage.setItem("dialogMessage", JSON.stringify({
    text: "Logout successful!",
    type: "info"
  }));
  window.location.href = './login.html';
});

window.addEventListener("DOMContentLoaded", () => {
  const msg = localStorage.getItem("dialogMessage");
  if (msg) {
    const { text, type } = JSON.parse(msg);
    showDialog(text, type);
    localStorage.removeItem("dialogMessage");
  }
});
