// ===== LOADER ANIMATION =====
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  
  // Simulate loading delay for demo purposes
  setTimeout(function() {
    loader.classList.add('loaded');
    
    // Remove loader from DOM after animation completes
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1000);
  }, 1500);
});

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;

// Cursor animation with GSAP (included via CDN in HTML)
if (window.GSAP) {
  gsap.to({}, {
    duration: 0.016,
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;
      
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      });
      
      gsap.set(cursorFollower, {
        css: {
          left: posX - 20,
          top: posY - 20
        }
      });
    }
  });
}

// Cursor hover effects
document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const hoverElements = document.querySelectorAll('a, button, .cta-btn, .nav-link, .social-link, .menu-toggle');

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', function() {
    cursor.classList.add('active');
    cursorFollower.classList.add('active');
    
    if (this.classList.contains('cta-btn')) {
      cursorFollower.classList.add('cta-active');
    }
  });
  
  el.addEventListener('mouseleave', function() {
    cursor.classList.remove('active');
    cursorFollower.classList.remove('active');
    cursorFollower.classList.remove('cta-active');
  });
});

// ===== NAVIGATION =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');

// Mobile menu toggle
menuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Close menu when clicking a nav item
navItems.forEach(item => {
  item.addEventListener('click', function() {
    if (navLinks.classList.contains('active')) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
});

// Sticky navbar on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.main-nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ===== PARTICLE BACKGROUND =====
if (window.particlesJS) {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff4d00"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff4d00",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
}

// ===== SCROLL REVEAL ANIMATIONS =====
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: true
});

sr.reveal('.section', {
  interval: 200
});

// ===== MUSIC PLAYER FUNCTIONALITY =====
// Will be added when we create the music section
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any elements that need to be ready when DOM is loaded
  
  // Update copyright year automatically
  const yearSpan = document.querySelector('#current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Initialize social media links with your actual URLs
  const socialLinks = {
    instagram: "https://instagram.com/yourusername",
    spotify: "https://open.spotify.com/artist/yourid",
    soundcloud: "https://soundcloud.com/yourusername",
    whatsapp: "https://wa.me/yournumber",
    facebook: "https://facebook.com/yourusername"
  };
  
  document.querySelectorAll('[data-social]').forEach(link => {
    const platform = link.getAttribute('data-social');
    if (socialLinks[platform]) {
      link.setAttribute('href', socialLinks[platform]);
    }
  });
});