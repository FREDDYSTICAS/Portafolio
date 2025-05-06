  // Generador de partículas
  function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const numParticles = 50;
    
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Posición aleatoria
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Tamaño aleatorio
      const size = Math.random() * 5 + 2;
      
      // Duración aleatoria
      const duration = Math.random() * 15 + 10;
      
      // Retraso aleatorio
      const delay = Math.random() * 5;
      
      particle.style.left = posX + '%';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.opacity = Math.random() * 0.6 + 0.2;
      particle.style.animationDuration = duration + 's';
      particle.style.animationDelay = delay + 's';
      
      particlesContainer.appendChild(particle);
    }
  }
  
  // Botón "Volver arriba"
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Modal CV
  function initCVModal() {
    const modal = document.getElementById('cvModal');
    const openModalBtn = document.getElementById('open-cv-btn');
    const viewCVBtn = document.getElementById('view-cv-btn');
    const closeModalBtn = document.getElementById('closeModal');
    
    function openModal() {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
    
    viewCVBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
    
    closeModalBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  
  // Navegación suave
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Formulario de contacto
  function initContactForm() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = encodeURIComponent(document.getElementById('name').value);
      const email = encodeURIComponent(document.getElementById('email').value);
      const subject = encodeURIComponent(document.getElementById('subject').value);
      const message = encodeURIComponent(document.getElementById('message').value);
  
      const body = `Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=cfreddystiven@gmail.com&su=${subject}&body=${body}`;
  
      window.open(mailtoLink, '_blank');
    });
  }
  
  // Animación de habilidades al hacer scroll
  function initSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });
    
    skillCards.forEach(card => {
      card.style.transform = 'translateY(50px)';
      card.style.opacity = '0';
      card.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      observer.observe(card);
    });
  }
  
  // Animación del texto de introducción
  function initTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    
    if (typingText) {
      const text = typingText.innerText;
      typingText.innerText = '';
      
      let i = 0;
      const typingSpeed = 100; // milisegundos por carácter
      
      function typeWriter() {
        if (i < text.length) {
          typingText.innerText += text.charAt(i);
          i++;
          setTimeout(typeWriter, typingSpeed);
        }
      }
      
      setTimeout(typeWriter, 1000);
    }
  }
  
  // Inicializar todas las funciones cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initBackToTop();
    initCVModal();
    initSmoothScroll();
    initContactForm();
    initSkillsAnimation();
    // initTypingAnimation(); // Comentado porque usamos CSS para la animación de typing
  });
  
  // Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close menu when clicking on a link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
