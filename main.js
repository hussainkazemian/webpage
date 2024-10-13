'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const showDialogButton = document.getElementById('show-dialog');
  const dialog = document.getElementById('register-dialog');
  const closeDialogButton = document.getElementById('close-dialog');
  const toggleButton = document.getElementById('checkbox'); // Updated to use the checkbox instead
  const body = document.body;

  // Open the dialog when the button is clicked
  showDialogButton.addEventListener('click', () => {
    dialog.showModal();
  });

  // Close the dialog when the close button is clicked
  closeDialogButton.addEventListener('click', () => {
    dialog.close();
  });

  // Check for previously saved user preference for dark mode
  const darkModePreference = localStorage.getItem('dark-mode');
  if (darkModePreference === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.checked = true; // Ensure the checkbox reflects the saved preference
  }

  // Toggle dark mode using the checkbox
  toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
});
