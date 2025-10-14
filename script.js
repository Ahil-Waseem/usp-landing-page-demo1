const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const logoImg = document.getElementById("navbarLogo");
const navBtn = document.querySelector(".nav-btn");

// Logo image paths
const logoDefault = "assets/images/logo_USP NEW LOGO BLACK.png";
const logoScrolled = "assets/images/logo_USP NEW LOGO WHITE.png";

// Change navbar color on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
    logoImg.src = logoDefault;
    navBtn.style.backgroundColor = "#060606";
    navBtn.style.color = "#fff";
    navBtn.querySelector("i").style.color = "#fff";
  } else {
    navbar.classList.remove("scrolled");
    logoImg.src = logoScrolled;
    navBtn.style.backgroundColor = "#fff";
    navBtn.style.color = "#060606";
    navBtn.querySelector("i").style.color = "#060606";
  }
});

// Mobile menu toggle, now with outside click close
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    document.addEventListener("click", closeMenuOnOutsideClick);
  } else {
    document.removeEventListener("click", closeMenuOnOutsideClick);
  }
});
// Jab menu ke andar kahi bhi click ho, event document tak na jaye
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

function closeMenuOnOutsideClick(e) {
  // Agar menu ya menuToggle click nahi hua to hi band ho
  if (!menu.contains(e.target) && e.target !== menuToggle) {
    menu.classList.remove("active");
    document.removeEventListener("click", closeMenuOnOutsideClick);
  }
}

// Menu link par click par bhi menu band ho
// document.querySelectorAll("#menu a").forEach((link) => {
//   link.addEventListener("click", () => {
//     menu.classList.remove("active");
//     document.removeEventListener("click", closeMenuOnOutsideClick);
//   });
// });

// Optional: For another nav (if used)
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// Dropdown code
document.querySelectorAll(".dropdown > .dropbtn").forEach((dropbtn) => {
  dropbtn.addEventListener("click", function (e) {
    e.preventDefault();

    e.stopPropagation();
    const isActive = this.parentElement.classList.toggle("active");

    document.querySelectorAll(".dropdown").forEach((item) => {
      if (item !== this.parentElement) {
        item.classList.remove("active");
      }
    });
    if (!isActive) {
      this.parentElement.classList.add("active");
      document.addEventListener("click", closeDropdownOnClickOutside);
    } else {
      // Agar close ho chuka to listener hatao
      this.parentElement.classList.remove("active");
      document.removeEventListener("click", closeDropdownOnClickOutside);
    }
  });
});
function closeDropdownOnClickOutside(e) {
  document
    .querySelectorAll(".dropdown")
    .forEach((item) => item.classList.remove("active"));
  document.removeEventListener("click", closeDropdownOnClickOutside);
}

// Dropdown ke andar click propagate na ho
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => e.stopPropagation());
});

// CTA Form section Script Code below
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted! This is a demo - connect it to your backend.");
});

// Slider CARD Script Start
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");
const cards = document.querySelectorAll(".outcome-card");

let currentIndex = 0;
const cardWidth = 630;

// Create dots
cards.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => scrollToCard(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === cards.length - 1;
}

function scrollToCard(index) {
  currentIndex = index;
  carousel.scrollTo({
    left: cardWidth * index,
    behavior: "smooth",
  });
  updateDots();
  updateButtons();
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    scrollToCard(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    scrollToCard(currentIndex + 1);
  }
});

// Update current index on scroll
let scrollTimeout;
carousel.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const scrollLeft = carousel.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      updateDots();
      updateButtons();
    }
  }, 100);
});

// Touch swipe support
let startX = 0;
let scrollLeft = 0;
let isDragging = false;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
  isDragging = true;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX;
  const walk = (startX - x) * 2;
  carousel.scrollLeft = scrollLeft + walk;
});

carousel.addEventListener("touchend", () => {
  isDragging = false;
});

// Mouse drag support
carousel.addEventListener("mousedown", (e) => {
  startX = e.pageX;
  scrollLeft = carousel.scrollLeft;
  isDragging = true;
  carousel.style.cursor = "grabbing";
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (startX - x) * 2;
  carousel.scrollLeft = scrollLeft + walk;
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});

// Initial button state
updateButtons();
carousel.style.cursor = "grab";

// Section: Sliding Section Script
// const stickyContainer = document.getElementById("stickyContainer");
// const cards2 = document.querySelectorAll(".diff-card");

// let currentCard = 0;
// const totalCards = cards2.length;

// function updateCards() {
//   const containerTop = stickyContainer.getBoundingClientRect().top;
//   const containerHeight = stickyContainer.offsetHeight;
//   const scrollProgress = -containerTop / (containerHeight - window.innerHeight);

// Determine which card should be active based on scroll position
//   let newCard = Math.floor(scrollProgress * totalCards);
//   newCard = Math.max(0, Math.min(newCard, totalCards - 1));

//   if (newCard !== currentCard) {
//     currentCard = newCard;

//     cards2.forEach((card, index) => {
//       card.classList.remove("active", "prev", "next");

//       if (index === currentCard) {
//         card.classList.add("active");
//       } else if (index < currentCard) {
//         card.classList.add("prev");
//       } else {
//         card.classList.add("next");
//       }
//     });
//   }
// }

// Throttle scroll event for better performance
// let ticking = false;
// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       updateCards();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// Initial call
// updateCards();

// Footer: Accordion
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

// Testiminial Script

// Scroll arrows
const slider = document.getElementById("testimonialSlider");
document.getElementById("slideLeft").onclick = () => {
  slider.scrollBy({ left: -400, behavior: "smooth" });
};
document.getElementById("slideRight").onclick = () => {
  slider.scrollBy({ left: 400, behavior: "smooth" });
};

// Generate initials automatically
document.querySelectorAll(".avatar-initial").forEach((el) => {
  const name = el.getAttribute("data-name") || "";
  const first = name.trim().charAt(0).toUpperCase();
  el.textContent = first;
});
// WHO WE ARE SECTION SCRIPT START
// Toggle card on mobile tap
function toggleCard(card) {
  if (window.innerWidth <= 768) {
    card.classList.toggle("active");
  }
}
// WHO WE ARE SECTION SCRIPT END

// SCROLL SECTION START
// Stacked Sticky Scroll animation
gsap.registerPlugin(ScrollTrigger);

// Fade/slide each card until it reaches its sticky "park" offset
gsap.utils.toArray(".card-scroll").forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%", // when card enters viewport
      end: "top var(--offset)", // until it reaches its sticky top
      scrub: 1.2,
    },
    y: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1,
  });
});

// Optional subtle parallax for inner content
gsap.utils.toArray(".card-scroll").forEach((card) => {
  const content = card.querySelectorAll("h3, p");
  gsap.from(content, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "top calc(var(--offset) + 40px)",
      scrub: 1,
    },
    y: 20,
    opacity: 0.7,
    stagger: 0.08,
  });
});
// SCROLL SECTION END
