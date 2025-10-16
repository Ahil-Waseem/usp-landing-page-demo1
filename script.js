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
    navBtn.style.backgroundColor = "#af0300";
    navBtn.style.color = "#fff";
    navBtn.querySelector("i").style.color = "#fff";
  } else {
    navbar.classList.remove("scrolled");
    logoImg.src = logoScrolled;
    navBtn.style.backgroundColor = "#af0300";
    navBtn.style.color = "#fff";
    navBtn.querySelector("i").style.color = "#fff";
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
// gsap.utils.toArray(".card-scroll").forEach((card) => {
//   gsap.to(card, {
//     scrollTrigger: {
//       trigger: card,
//       start: "top 90%", // when card enters viewport
//       end: "top var(--offset)", // until it reaches its sticky top
//       scrub: 1.2,
//     },
//     y: 0,
//     opacity: 1,
//     ease: "power2.out",
//     duration: 1,
//   });
// });

// Optional subtle parallax for inner content
// gsap.utils.toArray(".card-scroll").forEach((card) => {
//   const content = card.querySelectorAll("h3, p");
//   gsap.from(content, {
//     scrollTrigger: {
//       trigger: card,
//       start: "top 85%",
//       end: "top calc(var(--offset) + 40px)",
//       scrub: 1,
//     },
//     y: 20,
//     opacity: 0.7,
//     stagger: 0.08,
//   });
// });
// SCROLL SECTION END

// ========================================
// ALTERNATIVE: If buttons still don't work, use this simpler version
// ========================================
// Wait for page to fully load
window.addEventListener("load", function () {
  // TESTIMONIAL
  const testimonialSlider = document.getElementById("testimonialSlider");
  const slideLeft = document.getElementById("slideLeft");
  const slideRight = document.getElementById("slideRight");

  if (slideLeft) {
    slideLeft.onclick = function () {
      testimonialSlider.scrollLeft -= 400;
    };
  }

  if (slideRight) {
    slideRight.onclick = function () {
      testimonialSlider.scrollLeft += 400;
    };
  }
});
  // EXPERTISE
//   const expertisePrev = document.getElementById("expertise-prev");
//   const expertiseNext = document.getElementById("expertise-next");
//   const expertiseContent = document.querySelector(".expertise-card-content");

//   if (expertisePrev) {
//     expertisePrev.onclick = function () {
//       const amount = window.innerWidth > 768 ? 500 : 300;
//       expertiseContent.scrollLeft -= amount;
//     };
//   }

//   if (expertiseNext) {
//     expertiseNext.onclick = function () {
//       const amount = window.innerWidth > 768 ? 500 : 300;
//       expertiseContent.scrollLeft += amount;
//     };
//   }
// });


  // document.getElementById('callButton').addEventListener('click', function() {
  //   // Example: call dialer or open modal with contact info
  //   window.location.href = 'tel:+91 9833022443';
  // });
