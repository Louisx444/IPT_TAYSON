document.addEventListener("DOMContentLoaded", () => {
    // Display a greeting alert on page load
    alert("Welcome to Vincent Louis Tayson's Portfolio!");

    // Handle search input
    const searchInput = document.querySelector(".search input");
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        alert(`You searched for: ${searchInput.value}`);
        searchInput.value = ""; // Clear the input field
      }
    });

    // Add a menu toggle feature for mobile users
    const navMenu = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Menu";
    toggleButton.className = "menu-toggle";
    document.querySelector("header").insertBefore(toggleButton, navMenu);

    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("visible");
    });
  });