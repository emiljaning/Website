// Language translations
const translations = {
    en: {
        'nav-home': 'Home', 'nav-services': 'Services', 'nav-about': 'About', 'nav-contact': 'Contact',
        'hero-title1': 'Your Trusted Partner for', 'hero-title2': 'Technology & Digital Solutions',
        'hero-subtitle': 'Professional IT support, cybersecurity, programming, website solutions, and electrical engineering services for homes and businesses. Reliable, secure, and innovative.',
        'hero-btn1': 'Get Free Consultation', 'hero-btn2': 'View Services', 'hero-btn3': 'WhatsApp Us',
        'stat1': 'Happy Clients', 'stat2': 'Projects Completed', 'stat3': 'Support Available',
        'services-tag': 'What We Offer', 'services-title': 'Our Professional Services', 'services-subtitle': 'Comprehensive technology, digital, and engineering solutions tailored to your needs',
        'service1-title': 'IT Support & Consulting', 'service1-desc': 'Complete IT infrastructure management, help desk support, system maintenance, and technology consulting for businesses of all sizes.',
        'service1-feat1': '24/7 Remote Support', 'service1-feat2': 'Network Setup & Management', 'service1-feat3': 'Data Backup & Recovery', 'service1-feat4': 'Hardware & Software Installation',
        'service2-title': 'Cybersecurity', 'service2-desc': 'Protect your digital assets with advanced security solutions, threat detection, and comprehensive risk management strategies.',
        'service2-feat1': 'Network Security Audits', 'service2-feat2': 'Malware & Ransomware Protection', 'service2-feat3': 'Security Awareness Training', 'service2-feat4': 'Compliance & Risk Assessment',
        'service3-title': 'Programming & Web Solutions', 'service3-desc': 'Custom software development, website design, and web applications for homes and businesses.',
        'service3-feat1': 'Custom Website Development', 'service3-feat2': 'E-commerce Solutions', 'service3-feat3': 'Mobile App Development', 'service3-feat4': 'CMS & Database Design',
        'service4-title': 'Electrical Engineering', 'service4-desc': 'Innovative electrical engineering solutions for residential and commercial projects, from design to implementation.',
        'service4-feat1': 'Home Automation Systems', 'service4-feat2': 'Smart Lighting Control', 'service4-feat3': 'Energy Efficiency Solutions', 'service4-feat4': 'Electrical System Design',
        'details-tag': 'Detailed Services', 'details-title': 'Specialized Solutions', 'details-subtitle': 'We provide tailored solutions for both residential and commercial clients',
        'tab-home': 'For Home', 'tab-business': 'For Business',
        'home1-title': 'Home Network Setup', 'home1-desc': 'Secure, high-speed WiFi throughout your home',
        'home2-title': 'Smart Home Security', 'home2-desc': 'Cameras, sensors, and smart locks installation',
        'home3-title': 'Home Automation', 'home3-desc': 'Voice-controlled lighting, thermostats, and appliances',
        'home4-title': 'Personal Websites', 'home4-desc': 'Custom portfolio and personal websites',
        'home5-title': 'Electrical Upgrades', 'home5-desc': 'Panel upgrades, EV chargers, and lighting installation',
        'business1-title': 'Server Management', 'business1-desc': 'On-premise and cloud server solutions',
        'business2-title': 'Enterprise Security', 'business2-desc': 'Firewalls, VPNs, and intrusion detection',
        'business3-title': 'IT Infrastructure', 'business3-desc': 'Scalable solutions for growing businesses',
        'business4-title': 'E-commerce Solutions', 'business4-desc': 'Online stores with payment integration',
        'business5-title': 'Managed Services', 'business5-desc': 'Complete IT department outsourcing',
        'about-tag': 'About Us', 'about-title': 'Why Choose AssistOnIT?',
        'about-desc': 'With years of experience in IT, cybersecurity, programming, web development, and electrical engineering, we bring together multiple essential disciplines to provide complete technology solutions for modern homes and businesses.',
        'about-feat1-title': 'Certified Professionals', 'about-feat1-desc': 'Industry-certified experts in all domains',
        'about-feat2-title': 'Rapid Response', 'about-feat2-desc': 'Quick turnaround times and emergency support',
        'about-feat3-title': 'Competitive Pricing', 'about-feat3-desc': 'Transparent pricing with no hidden fees',
        'about-feat4-title': '24/7 Support', 'about-feat4-desc': 'Round-the-clock assistance when you need it',
        'about-image-text': 'Expert Team Ready to Help',
        'contact-tag': 'Get In Touch', 'contact-title': 'Contact Us Today', 'contact-subtitle': 'Ready to secure and optimize your technology? Let\'s talk!',
        'contact-email-title': 'Email Us', 'contact-phone-title': 'Call Us', 'contact-wa-title': 'WhatsApp Us', 'contact-hours-title': 'Business Hours',
        'hours1': 'Monday - Friday: 8AM - 8PM', 'hours2': 'Saturday: 10AM - 4PM', 'hours3': 'Sunday: Emergency Only',
        'form-name': 'Your Name', 'form-email': 'Your Email', 'form-service-default': 'Select Service Needed',
        'form-service1': 'IT Support', 'form-service2': 'Cybersecurity', 'form-service3': 'Programming & Web Solutions', 'form-service4': 'Electrical Engineering', 'form-service5': 'Multiple Services',
        'form-message': 'Tell us about your project...', 'form-submit': 'Send Message', 'form-note': 'We\'ll respond within 24 hours',
        'footer-desc': 'Your trusted partner for IT support, cybersecurity, programming, website solutions, and electrical engineering.',
        'footer-quick': 'Quick Links', 'footer-services': 'Services', 'footer-follow': 'Follow Us', 'footer-social-text': 'Connect with us on social media',
        'footer-rights': 'All rights reserved.', 'footer-follow-text': 'Follow us:'
    },
    sq: {
        'nav-home': 'Kreu', 'nav-services': 'Shërbimet', 'nav-about': 'Rreth Nesh', 'nav-contact': 'Kontakt',
        'hero-title1': 'Partneri Juaj i Besueshëm për', 'hero-title2': 'Zgjidhje Teknologjike & Dixhitale',
        'hero-subtitle': 'Shërbime profesionale IT, kibernetike, programimi, zgjidhje website dhe inxhinieri elektrike për shtëpi dhe biznese. Të besueshme, të sigurta dhe inovative.',
        'hero-btn1': 'Merrni Konsultë Falas', 'hero-btn2': 'Shih Shërbimet', 'hero-btn3': 'Na Shkruani në WhatsApp',
        'stat1': 'Klientë të Kënaqur', 'stat2': 'Projekte të Përfunduara', 'stat3': 'Mbështetje 24/7',
        'services-tag': 'Çfarë Ofrojmë', 'services-title': 'Shërbimet Tona Profesionale', 'services-subtitle': 'Zgjidhje gjithëpërfshirëse teknologjike, dixhitale dhe inxhinierike të përshtatura për nevojat tuaja',
        'service1-title': 'Mbështetje IT & Konsulencë', 'service1-desc': 'Menaxhim i plotë i infrastrukturës IT, mbështetje help desk, mirëmbajtje sistemesh dhe konsulencë teknologjike për biznese të të gjitha madhësive.',
        'service1-feat1': 'Mbështetje në Distancë 24/7', 'service1-feat2': 'Konfigurim dhe Menaxhim Rrjeti', 'service1-feat3': 'Backup dhe Rikuperim të Dhënash', 'service1-feat4': 'Instalim Hardware & Software',
        'service2-title': 'Siguria Kibernetike', 'service2-desc': 'Mbroni asetet tuaja dixhitale me zgjidhje të avancuara sigurie, zbulim kërcënimesh dhe strategji gjithëpërfshirëse menaxhimi të rrezikut.',
        'service2-feat1': 'Auditime të Sigurisë së Rrjetit', 'service2-feat2': 'Mbrojtje nga Malware dhe Ransomware', 'service2-feat3': 'Trajnim për Ndërgjegjësim të Sigurisë', 'service2-feat4': 'Vlerësim Pajtueshmërie dhe Rreziku',
        'service3-title': 'Programim & Zgjidhje Web', 'service3-desc': 'Zhvillim softuerësh me porosi, dizajn website dhe aplikacione web për shtëpi dhe biznese.',
        'service3-feat1': 'Zhvillim Website me Porosi', 'service3-feat2': 'Zgjidhje E-commerce', 'service3-feat3': 'Zhvillim Aplikacionesh Mobile', 'service3-feat4': 'Dizajn CMS dhe Database',
        'service4-title': 'Inxhinieri Elektrike', 'service4-desc': 'Zgjidhje inovative inxhinierike elektrike për projekte banimi dhe komerciale, nga projektimi deri në implementim.',
        'service4-feat1': 'Sisteme Automatizimi Shtëpie', 'service4-feat2': 'Kontroll i Ndriçimit të Mençur', 'service4-feat3': 'Zgjidhje për Efiçencë Energjetike', 'service4-feat4': 'Dizajn i Sistemeve Elektrike',
        'details-tag': 'Shërbime të Detajuara', 'details-title': 'Zgjidhje të Specializuara', 'details-subtitle': 'Ne ofrojmë zgjidhje të përshtatura për klientët rezidencialë dhe komercialë',
        'tab-home': 'Për Shtëpi', 'tab-business': 'Për Biznes',
        'home1-title': 'Konfigurim Rrjeti Shtëpiak', 'home1-desc': 'WiFi i sigurt dhe me shpejtësi të lartë në të gjithë shtëpinë',
        'home2-title': 'Siguri Shtëpie e Mençur', 'home2-desc': 'Instalim kamerash, sensorësh dhe bravash inteligjente',
        'home3-title': 'Automatizim Shtëpie', 'home3-desc': 'Ndriçim, termostate dhe pajisje të kontrolluara me zë',
        'home4-title': 'Website Personale', 'home4-desc': 'Website portfolio dhe personal me porosi',
        'home5-title': 'Përmirësime Elektrike', 'home5-desc': 'Përmirësim panele, karikues EV dhe instalim ndriçimi',
        'business1-title': 'Menaxhim Serverësh', 'business1-desc': 'Zgjidhje serverësh në vend dhe në cloud',
        'business2-title': 'Siguri Ndërmarrjesh', 'business2-desc': 'Firewalls, VPN dhe zbulim ndërhyrjesh',
        'business3-title': 'Infrastrukturë IT', 'business3-desc': 'Zgjidhje të shkallëzueshme për biznese në rritje',
        'business4-title': 'Zgjidhje E-commerce', 'business4-desc': 'Dyqane online me integrim pagesash',
        'business5-title': 'Shërbime të Menaxhuara', 'business5-desc': 'Outsourcing i plotë i departamentit IT',
        'about-tag': 'Rreth Nesh', 'about-title': 'Pse të Zgjidhni AssistOnIT?',
        'about-desc': 'Me vite përvojë në IT, siguri kibernetike, programim, zhvillim web dhe inxhinieri elektrike, ne bashkojmë disiplina të shumta thelbësore për të ofruar zgjidhje të plota teknologjike për shtëpitë dhe bizneset moderne.',
        'about-feat1-title': 'Profesionistë të Certifikuar', 'about-feat1-desc': 'Ekspertë të certifikuar në të gjitha fushat',
        'about-feat2-title': 'Përgjigje e Shpejtë', 'about-feat2-desc': 'Afate të shpejta dhe mbështetje emergjente',
        'about-feat3-title': 'Çmime Konkurruese', 'about-feat3-desc': 'Çmime transparente pa pagesa të fshehura',
        'about-feat4-title': 'Mbështetje 24/7', 'about-feat4-desc': 'Asistencë rreth ore kur ju nevojitet',
        'about-image-text': 'Ekipi Ekspert Gati për të Ndihmuar',
        'contact-tag': 'Kontaktoni', 'contact-title': 'Na Kontaktoni Sot', 'contact-subtitle': 'Gati për të siguruar dhe optimizuar teknologjinë tuaj? Le të flasim!',
        'contact-email-title': 'Na Dërgo Email', 'contact-phone-title': 'Na Telefononi', 'contact-wa-title': 'WhatsApp', 'contact-hours-title': 'Orari i Punës',
        'hours1': 'E Hënë - E Premte: 08:00 - 20:00', 'hours2': 'E Shtunë: 10:00 - 16:00', 'hours3': 'E Diel: Vetëm Emergjenca',
        'form-name': 'Emri Juaj', 'form-email': 'Email-i Juaj', 'form-service-default': 'Zgjidhni Shërbimin e Nevojshëm',
        'form-service1': 'Mbështetje IT', 'form-service2': 'Siguri Kibernetike', 'form-service3': 'Programim & Zgjidhje Web', 'form-service4': 'Inxhinieri Elektrike', 'form-service5': 'Shërbime të Shumëfishta',
        'form-message': 'Na tregoni për projektin tuaj...', 'form-submit': 'Dërgo Mesazhin', 'form-note': 'Ne do të përgjigjemi brenda 24 orëve',
        'footer-desc': 'Partneri juaj i besueshëm për mbështetje IT, siguri kibernetike, programim, zgjidhje website dhe inxhinieri elektrike.',
        'footer-quick': 'Lidhje të Shpejta', 'footer-services': 'Shërbimet', 'footer-follow': 'Na Ndiqni', 'footer-social-text': 'Lidhuni me ne në rrjetet sociale',
        'footer-rights': 'Të gjitha të drejtat e rezervuara.', 'footer-follow-text': 'Na ndiqni:'
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-key-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update select options
    document.querySelectorAll('select option').forEach(option => {
        const key = option.getAttribute('data-key');
        if (key && translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const activeContent = document.getElementById(`${tabId}-tab`);
            if (activeContent) activeContent.classList.add('active');
        });
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert(currentLang === 'sq' ? 'Ju lutem plotësoni të gjitha fushat.' : 'Please fill all fields.');
            return;
        }
        
        submitBtn.textContent = currentLang === 'sq' ? 'Duke dërguar...' : 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('service', service);
            formData.append('message', message);
            formData.append('_subject', `Contact from AssistOnIT - ${name}`);
            
            const response = await fetch('https://formsubmit.co/ajax/assistonit@outlook.com', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                alert(currentLang === 'sq' ? 'Mesazhi u dërgua!' : 'Message sent!');
                contactForm.reset();
            } else {
                window.location.href = `mailto:assistonit@outlook.com?subject=Contact from ${name}&body=${message}`;
            }
        } catch (error) {
            window.location.href = `mailto:assistonit@outlook.com?subject=Contact from ${name}&body=${message}`;
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Language switcher event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.getAttribute('data-lang')));
});

// Load saved language
const savedLang = localStorage.getItem('preferredLanguage');
if (savedLang === 'sq') switchLanguage('sq');
else switchLanguage('en');

// Navbar scroll effect
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

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('section, .service-card, .info-card, .tab-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('AssistOnIT website loaded - Language switcher ready!');
