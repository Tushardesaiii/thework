// Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("darkModeBtn").addEventListener("click", toggleDarkMode);

// Auto-playing Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

const showSlides = () => {
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
};

setInterval(showSlides, 3000); // Change slide every 3 seconds

// Form Validation
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (name === "" || email === "") {
    errorMsg.textContent = "All fields are required!";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorMsg.textContent = "Enter a valid email!";
  } else {
    errorMsg.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
  }
});

// Smooth Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
