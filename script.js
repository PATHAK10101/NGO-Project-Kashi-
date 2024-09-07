document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Internal Links
    const links = document.querySelectorAll('.nav-links a, .btn');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        });
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    //hero-section carousel

    var carouselElement = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000, // Time between automatic transitions (ms)
      pause: 'hover', // Pauses carousel on hover
      ride: 'carousel' // Automatically starts sliding
    });

    
    // Fade-in Animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    
    // Mobile Navbar Toggle
    const toggleButton = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
