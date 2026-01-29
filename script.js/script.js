// CHANGE THIS TO YOUR GITHUB REPOSITORY LINK
function openGitHub() {
  window.open("https://github.com/YOUR_USERNAME/YOUR_REPOSITORY", "_blank");
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});