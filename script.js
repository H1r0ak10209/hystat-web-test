document.addEventListener("DOMContentLoaded", function () {
  // Page transition - fade out on link click
  var links = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="mailto"]):not([href^="tel"])');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href && !href.startsWith('http') && !this.getAttribute('target')) {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.2s ease-out';
        var navigated = false;
        setTimeout(function() {
          if (!navigated) {
            navigated = true;
            window.location.assign(href);
          }
        }, 200);
      }
    });
  });

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("open");
    });

    // メニュー外タップで閉じる
    document.addEventListener("click", function (e) {
      if (window.innerWidth <= 768 && menu.classList.contains("open")) {
        var nav = document.querySelector(".nav");
        if (nav && !nav.contains(e.target)) {
          menu.classList.remove("open");
        }
      }
    });

    // Close menu on link click (ドロップダウン親リンクは除く)
    var menuLinks = document.querySelectorAll(".nav-menu a");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // ドロップダウンの親リンク（href="#"）はスキップ
        if (link.parentElement.classList.contains("nav-dropdown")) {
          return;
        }
        menu.classList.remove("open");
      });
    });

    // Mobile dropdown toggle（親リンクのみに適用）
    var dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach(function (dropdown) {
      var parentLink = dropdown.querySelector(":scope > a");
      if (parentLink) {
        parentLink.addEventListener("click", function (e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle("open");
          }
        });
      }
    });

    // Mobile: ランゲージスイッチャーをメニュー下部に追加
    if (window.innerWidth <= 768) {
      var langSwitcher = document.querySelector(".lang-switcher");
      if (langSwitcher) {
        var mobileLangItem = document.createElement("li");
        mobileLangItem.classList.add("mobile-lang-item");
        mobileLangItem.innerHTML = langSwitcher.innerHTML;
        menu.appendChild(mobileLangItem);
      }
    }
  }

  // Desktop dropdown: delay before hiding to bridge the gap
  var desktopDropdowns = document.querySelectorAll(".nav-dropdown");
  desktopDropdowns.forEach(function (dropdown) {
    var hideTimer = null;

    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 768) {
        clearTimeout(hideTimer);
        dropdown.classList.add("hover");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 768) {
        hideTimer = setTimeout(function () {
          dropdown.classList.remove("hover");
        }, 400);
      }
    });

    var dropdownMenu = dropdown.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.addEventListener("mouseenter", function () {
        clearTimeout(hideTimer);
      });
      dropdownMenu.addEventListener("mouseleave", function () {
        hideTimer = setTimeout(function () {
          dropdown.classList.remove("hover");
        }, 400);
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
