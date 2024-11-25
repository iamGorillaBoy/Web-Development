window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 400) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  })
  function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");
  }