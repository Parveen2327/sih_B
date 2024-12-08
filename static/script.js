document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbar = document.querySelector('.navbar');
  const navbarLinks = document.querySelectorAll('.navbar-link'); // Select all links in the navbar

  // Toggle navbar visibility when hamburger menu is clicked
  navbarToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
  });

  // Close navbar when a link is clicked
  navbarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          navbar.classList.remove('active');
      });
  });
});


