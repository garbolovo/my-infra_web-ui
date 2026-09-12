const dialog = document.getElementById("diagram-dialog");
const openButton = document.querySelector(".diagram-button");
const closeButton = document.querySelector(".close-button");
const currentYearEl = document.getElementById("current-year");

if (dialog && openButton && closeButton) {
  openButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}
