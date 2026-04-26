document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  // Restore saved theme if any
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    // Update emoji for fun feedback
    const moon = toggle.querySelector(".moon");
    moon.textContent = body.classList.contains("light") ? "☀️" : "🌙";

    // Save preference
    localStorage.setItem(
      "theme",
      body.classList.contains("light") ? "light" : "dark"
    );
  });
});
