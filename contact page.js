// Smooth scroll (optional if you link to sections)
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting BigBrotiv! We'll get back to you soon 🚗✨");
    this.reset();
  });
}
