
protectPage();

  const user = authGuard.getUserFromToken();
  if (user) {
    document.getElementById('username').textContent = user.username;
  }

window.addEventListener("DOMContentLoaded", () => {
  const msg = localStorage.getItem("dialogMessage");
  if (msg) {
    const { text, type } = JSON.parse(msg);
    showDialog(text, type);
    localStorage.removeItem("dialogMessage");
  }
});
