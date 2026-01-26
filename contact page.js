document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  if (!form || !submitBtn) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    emailjs
      .sendForm(
        "service_esoqpw8",   // ✅ Your Service ID
        "template_ib65qzc",  // ✅ Your Template ID
        form
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Message failed. Please try again later.");
      })
      .finally(() => {
        submitBtn.textContent = "Send Message";
        submitBtn.disabled = false;
      });
  });
});



