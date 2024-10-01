'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const showDialogButton = document.getElementById('show-dialog');
  const dialog = document.getElementById('register-dialog');
  const closeDialogButton = document.getElementById('close-dialog');

  // Open the dialog when the button is clicked
  showDialogButton.addEventListener('click', () => {
      dialog.showModal();
  });

  // Close the dialog when the close button is clicked
  closeDialogButton.addEventListener('click', () => {
      dialog.close();
  });
});

// //Get the toggle button
// const toggleButton = document.getElementById ('toggleButton');

// //add event listener for click

// toggleButton.addEventListener('click', function() {
//   //toggle the dark mode class on the body
//   document.body.classList.toggle('dark-mode');

//   //update button text based on the current theme
//   if (document.body.classList.contains('dark-mode')) {
//     toggleButton.textContent = "Switch to Light Mode";

//   } else {
//     toggleButton.textContent = "Switch to Dark Mode"
//   }

// });
// main.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const body = document.body;

  // Check for previously saved user preference
  const darkModePreference = localStorage.getItem("dark-mode");
  if (darkModePreference === "enabled") {
      body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      // Save user preference
      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("dark-mode", "enabled");
          toggleButton.innerHTML = '<i class="fa-solid fa-toggle-on toggle-icon"></i>'; // Change icon to on
      } else {
          localStorage.setItem("dark-mode", "disabled");
          toggleButton.innerHTML = '<i class="fa-solid fa-toggle-off toggle-icon"></i>'; // Change icon to off
      }
  });
});



