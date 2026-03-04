document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });

    // Close menu on link click
    var menuLinks = document.querySelectorAll(".nav-menu a");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
      });
    });

    // Mobile dropdown toggle
    var dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          dropdown.classList.toggle("open");
        }
      });
    });
  }

  // Desktop dropdown with delay
  var navDropdowns = document.querySelectorAll(".nav-dropdown");
  var dropdownMenus = document.querySelectorAll(".dropdown-menu");
  var closeTimeout = null;

  navDropdowns.forEach(function (dropdown) {
    var dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 768) {
        clearTimeout(closeTimeout);
        dropdown.classList.add("active");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 768) {
        closeTimeout = setTimeout(function () {
          dropdown.classList.remove("active");
        }, 150);
      }
    });

    if (dropdownMenu) {
      dropdownMenu.addEventListener("mouseenter", function () {
        if (window.innerWidth > 768) {
          clearTimeout(closeTimeout);
          dropdown.classList.add("active");
        }
      });

      dropdownMenu.addEventListener("mouseleave", function () {
        if (window.innerWidth > 768) {
          closeTimeout = setTimeout(function () {
            dropdown.classList.remove("active");
          }, 150);
        }
      });
    }
  });

  // Contact form handling
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("お問い合わせありがとうございます。");
      form.reset();
    });
  }

  // Hero slideshow
  var slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    var currentSlide = 0;

    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 5000);
  }

  // Header scroll effect
  var header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});
