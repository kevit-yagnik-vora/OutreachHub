
// Load Header
fetch("/components/header.html")
  .then(res => res.text())
  .then(data => {
    const headerEl = document.getElementById("header-placeholder");
    if (headerEl) {
      headerEl.innerHTML = data;

      // Hamburger menu toggle
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');

      if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
          navMenu.classList.toggle('active');
          hamburger.classList.toggle('open');
        });
      }

      // Logout functionality
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
          const token = localStorage.getItem("token");
          if (!token) {
            window.location.href = "/html/login.html";
            return;
          }

          try {
            const response = await fetch("http://localhost:3000/auth/logout", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

            if (!response.ok) throw new Error("Logout failed");

            const data = await response.json();
            console.log(data.message);
          } catch (error) {
            console.error("Logout error:", error);
          } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("userData");
            localStorage.setItem("dialogMessage", JSON.stringify({
              text: "Logout successful!",
              type: "info"
            }));
            window.location.href = "/html/login.html";
          }
        });
      }
    }
  });

// Load Footer
fetch("/components/footer.html")
  .then(res => res.text())
  .then(data => {
    const footerEl = document.getElementById("footer-placeholder");
    if (footerEl) {
      footerEl.innerHTML = data;
    }
  });
