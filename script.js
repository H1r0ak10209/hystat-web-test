document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

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

  // Contact form handling
  var form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("お問い合わせありがとうございます。");
    form.reset();
  });
});
