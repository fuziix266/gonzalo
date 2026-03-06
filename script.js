// ===== SCROLL ANIMATIONS =====
document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for fade-up animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

  // Header scroll effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileNav.classList.toggle("open");
  });

  // Close mobile menu on link click
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mobileNav.classList.remove("open");
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
