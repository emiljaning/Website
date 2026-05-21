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
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
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

// ========== WORKING CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !message) {
            alert('❌ Please fill in all required fields (Name, Email, and Message).');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            alert('❌ Please enter a valid email address.');
            return;
        }
        
        // Show sending status
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Method 1: Try FormSubmit.co
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('service', service);
            formData.append('message', message);
            formData.append('_subject', `New Contact from AssistOnIT - ${name}`);
            formData.append('_template', 'table');
            
            const response = await fetch('https://formsubmit.co/ajax/assistonit@outlook.com', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (response.ok && result.success !== false) {
                alert('✅ Message sent successfully! We will get back to you within 24 hours.');
                contactForm.reset();
            } else {
                // Fallback to mailto
                const emailBody = `Name: ${name}%0A%0AEmail: ${email}%0A%0AService: ${service}%0A%0AMessage: ${message}%0A%0A---%0ASent from AssistOnIT website`;
                window.location.href = `mailto:assistonit@outlook.com?subject=Contact from ${encodeURIComponent(name)}&body=${emailBody}`;
                alert('📧 Please check your email client to send the message.');
                contactForm.reset();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            // Fallback to mailto
            const emailBody = `Name: ${name}%0A%0AEmail: ${email}%0A%0AService: ${service}%0A%0AMessage: ${message}%0A%0A---%0ASent from AssistOnIT website`;
            window.location.href = `mailto:assistonit@outlook.com?subject=Contact from ${encodeURIComponent(name)}&body=${emailBody}`;
            alert('📧 Please check your email client to send the message.');
            contactForm.reset();
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email && email.includes('@')) {
            // Send to FormSubmit
            const formData = new FormData();
            formData.append('email', email);
            formData.append('_subject', 'Newsletter Subscription - AssistOnIT');
            formData.append('message', `New newsletter subscription from: ${email}`);
            
            fetch('https://formsubmit.co/ajax/assistonit@outlook.com', {
                method: 'POST',
                body: formData
            }).catch(err => console.log('Newsletter error:', err));
            
            alert('✅ Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('❌ Please enter a valid email address.');
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

const animatedElements = document.querySelectorAll('section, .service-card, .info-card, .tab-item');
if (animatedElements.length > 0) {
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Fix for footer links
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

// Make phone numbers clickable
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Opening contact link:', link.href);
    });
});

console.log('AssistOnIT website loaded - Contact form ready');
