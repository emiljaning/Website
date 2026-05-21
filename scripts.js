// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Tab functionality for service details
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const activeContent = document.getElementById(`${tabId}-tab`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Don't prevent default if it's just a hash link without target
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission with email sending
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }
        
        // Create email content
        const emailBody = `Name: ${name}%0A%0AEmail: ${email}%0A%0AService Needed: ${service}%0A%0AMessage: ${message}%0A%0A---%0ASent from AssistOnIT website contact form`;
        
        // Method 1: Try FormSubmit.co (free, no backend needed)
        try {
            const response = await fetch('https://formsubmit.co/ajax/assistonit@outlook.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    service: service,
                    message: message,
                    _subject: `New Contact from AssistOnIT - ${name}`,
                    _template: 'table',
                    _captcha: 'false'
                })
            });
            
            const data = await response.json();
            
            if (response.ok && data.success !== false) {
                alert('✅ Message sent successfully! We will get back to you within 24 hours.');
                contactForm.reset();
            } else {
                // Fallback to mailto if FormSubmit fails
                window.location.href = `mailto:assistonit@outlook.com?subject=New Contact Form Submission from ${encodeURIComponent(name)}&body=${emailBody}`;
                alert('📧 Please check your email client to complete sending the message.');
                contactForm.reset();
            }
        } catch (error) {
            console.log('FormSubmit error, using mailto fallback:', error);
            // Fallback to mailto
            window.location.href = `mailto:assistonit@outlook.com?subject=New Contact Form Submission from ${encodeURIComponent(name)}&body=${emailBody}`;
            alert('📧 Please check your email client to complete sending the message.');
            contactForm.reset();
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Make phone and email links clickable in contact cards
document.querySelectorAll('.info-card a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Just let the default behavior work
        console.log('Opening:', this.href);
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email && email.includes('@')) {
            // Send to FormSubmit as well
            fetch('https://formsubmit.co/ajax/assistonit@outlook.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    _subject: 'Newsletter Subscription',
                    message: `New newsletter subscription from: ${email}`
                })
            }).catch(err => console.log('Newsletter error:', err));
            
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards for animation
const animatedElements = document.querySelectorAll('section, .service-card, .info-card, .tab-item');
if (animatedElements.length > 0) {
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Fix for footer service links - make them scroll to services section
document.querySelectorAll('.footer-links a, .footer-about a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// WhatsApp button click tracking (optional)
const whatsappBtns = document.querySelectorAll('.btn-whatsapp, a[href*="wa.me"]');
whatsappBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('WhatsApp button clicked');
    });
});

// Add loading state for external links
const externalLinks = document.querySelectorAll('a[target="_blank"]');
externalLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Opening external link:', link.href);
    });
});

// Page load complete
document.addEventListener('DOMContentLoaded', () => {
    console.log('AssistOnIT website loaded successfully');
    
    // Check if contact form exists and add any additional validation
    if (contactForm) {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9+]/g, '');
            });
        }
    }
});
