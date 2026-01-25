// document.addEventListener("DOMContentLoaded", function () {

//   /* ===== Smooth Scroll ===== */
//   window.scrollToSection = function (id) {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   /* ===== Button Click Animation ===== */
//   document.querySelectorAll(".card-btn").forEach(button => {
//     button.addEventListener("click", () => {
//       button.style.transform = "scale(0.95)";
//       setTimeout(() => {
//         button.style.transform = "scale(1)";
//       }, 150);
//     });
//   });

// });




document.addEventListener("DOMContentLoaded", () => {


  

  window.scrollToSection = function (id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

});

<script>
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
</script>


