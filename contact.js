const dialog = document.getElementById("contactDialog");

const personalBtn = document.getElementById("personalEmailBtn");
const collegeBtn = document.getElementById("collegeEmailBtn");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("contactForm");

function openDialog() {
  form.reset(); 
  dialog.showModal();
}

personalBtn.addEventListener("click", openDialog);
collegeBtn.addEventListener("click", openDialog);

// Cancel
closeBtn.addEventListener("click", () => {
  dialog.close();
});

// Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thanks for reaching out! I'll get back to you soon.");
  dialog.close();
});