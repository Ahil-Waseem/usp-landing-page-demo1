// ===============================
// Navbar Scroll & Logo Change
// ===============================
const navbar = document.getElementById("navbar");
const logoImg = document.getElementById("navbarLogo");
const navBtn = document.querySelector(".nav-btn");

// Logo image paths
const logoDefault = "assets/images/logo_USP NEW LOGO BLACK.png";
const logoScrolled = "assets/images/logo_USP NEW LOGO WHITE.png";

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar?.classList.add("scrolled");
    if (logoImg) logoImg.src = logoDefault;
    if (navBtn) {
      navBtn.style.backgroundColor = "#af0300";
      navBtn.style.color = "#fff";
      const icon = navBtn.querySelector("i");
      if (icon) icon.style.color = "#fff";
    }
  } else {
    navbar?.classList.remove("scrolled");
    if (logoImg) logoImg.src = logoScrolled;
    if (navBtn) {
      navBtn.style.backgroundColor = "#af0300";
      navBtn.style.color = "#fff";
      const icon = navBtn.querySelector("i");
      if (icon) icon.style.color = "#fff";
    }
  }
});

// ===============================
// Contact Form (Demo)
// ===============================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted! This is a demo - connect it to your backend.");
  });
}

// ===============================
// Footer Accordion
// ===============================
function toggleAccordion(header) {
  const item = header.parentElement;
  const allItems = document.querySelectorAll(".accordion-item");

  // Close other accordions
  allItems.forEach((otherItem) => {
    if (otherItem !== item && otherItem.classList.contains("active")) {
      otherItem.classList.remove("active");
    }
  });

  // Toggle current accordion
  item.classList.toggle("active");
}

// ===============================
// WHO WE ARE: Toggle Card on Mobile Tap
// ===============================
function toggleCard(card) {
  if (window.innerWidth <= 768) {
    card.classList.toggle("active");
  }
}

// ===============================
// Testimonial Slider
// ===============================
window.addEventListener("load", function () {
  const testimonialSlider = document.getElementById("testimonialSlider");
  const slideLeft = document.getElementById("slideLeft");
  const slideRight = document.getElementById("slideRight");

  if (!testimonialSlider || !slideLeft || !slideRight) return;

  // Calculate scroll amount dynamically based on card width + gap
  const card = testimonialSlider.querySelector(".testimonial-card");
  const scrollAmount = card ? card.offsetWidth + 24 : 400;

  slideLeft.onclick = () => {
    testimonialSlider.scrollLeft -= scrollAmount;
  };

  slideRight.onclick = () => {
    testimonialSlider.scrollLeft += scrollAmount;
  };
});

// ===============================
// CASE STUDIES: Open PDF with Blur
// ===============================
function openPDF(pdfUrl, element) {
  const container = element
    .closest(".image-card")
    .querySelector(".image-container");
  container.classList.add("blur");

  window.open(pdfUrl, "_blank");

  setTimeout(() => {
    container.classList.remove("blur");
  }, 1000);
}
