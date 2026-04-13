// HERO SLIDER (for index.html)
let currentSlide = 1;
const totalSlides = 3;

function showSlide(n) {
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.getElementById(`slide${i}`);
        const dot = document.getElementById(`dot${i}`);
        if (slide) {
            if (i === n) {
                slide.classList.remove('hidden');
                if (dot) dot.classList.add('bg-white', 'shadow');
            } else {
                slide.classList.add('hidden');
                if (dot) dot.classList.remove('bg-white', 'shadow');
            }
        }
    }
}

function nextSlide() { currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1; showSlide(currentSlide); }
function prevSlide() { currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1; showSlide(currentSlide); }
function goToSlide(n) { currentSlide = n; showSlide(currentSlide); }

// Hamburger Menu (mobile)
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Gallery Lightbox
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
}

// Contact Form Validation
function validateContact(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Valid email is required';
        isValid = false;
    }
    if (subject === '') {
        document.getElementById('subject-error').textContent = 'Subject is required';
        isValid = false;
    }
    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
    }
    
    if (isValid) {
        // Show success
        const successMsg = document.getElementById('success-message');
        successMsg.style.display = 'block';
        successMsg.textContent = '✅ Message sent successfully! (Demo)';
        
        // Reset form
        event.target.reset();
        
        // Hide success after 4 seconds
        setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    
    // Auto-run slider only if hero exists (for index.html)
    if (document.getElementById('slide1')) {
        showSlide(1);
        setInterval(() => { nextSlide(); }, 5000);
    }
});