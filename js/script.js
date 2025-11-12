// ===================================
// Navigation Functionality
// ===================================

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link Highlight
// ===================================

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===================================
// GitHub Calendar Integration
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GitHub Calendar
    if (typeof GitHubCalendar !== 'undefined') {
        try {
            GitHubCalendar(".calendar", "rahulgarg111", {
                responsive: true,
                tooltips: true,
                global_stats: false
            });
        } catch (error) {
            console.error('Error loading GitHub calendar:', error);
            document.querySelector('.calendar').innerHTML =
                '<p style="text-align: center; color: #8b949e;">Unable to load contribution calendar. Please check your internet connection.</p>';
        }
    } else {
        console.warn('GitHub Calendar library not loaded');
        document.querySelector('.calendar').innerHTML =
            '<p style="text-align: center; color: #8b949e;">GitHub Calendar library is loading...</p>';
    }
});

// ===================================
// Scroll to Top Functionality (Optional)
// ===================================

// Create scroll to top button (optional feature)
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--accent-color);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.25rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .scroll-to-top:hover {
            background: #218838;
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        @media screen and (max-width: 767px) {
            .scroll-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 1rem;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// ===================================
// Intersection Observer for Animations
// ===================================

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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.project-card, .skill-card, .contact-item, .github-stat-card, .highlight-item'
    );

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
});

// ===================================
// Loading Animation for GitHub Stats
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const githubStatImages = document.querySelectorAll('.github-stat-card img');

    githubStatImages.forEach(img => {
        img.addEventListener('load', () => {
            img.parentElement.style.opacity = '1';
        });

        img.addEventListener('error', () => {
            img.parentElement.innerHTML =
                '<p style="text-align: center; color: #8b949e; padding: 20px;">Unable to load GitHub stats</p>';
        });
    });
});

// ===================================
// Type Writer Effect for Home Section (Optional)
// ===================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment below to enable typewriter effect on page load
/*
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.home-subtitle');
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 80);
});
*/

// ===================================
// Console Message (Easter Egg)
// ===================================

console.log('%c👋 Hi there! Welcome to my portfolio!', 'color: #28a745; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #007bff; font-size: 14px;');
console.log('%c📧 Reach out: rahul.garg4489@gmail.com', 'color: #6c757d; font-size: 12px;');

// ===================================
// Performance: Lazy Loading Images
// ===================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Handle External Links
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Ensure all external links open in new tab
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ===================================
// Form Validation (If contact form is added)
// ===================================

// Placeholder for future contact form validation
function validateContactForm(formData) {
    const email = formData.get('email');
    const message = formData.get('message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Please enter a valid email address' };
    }

    if (message.length < 10) {
        return { valid: false, error: 'Message must be at least 10 characters long' };
    }

    return { valid: true };
}

// ===================================
// Theme Toggle (Optional - Dark/Light Mode)
// ===================================

// Placeholder for future dark/light mode toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// ===================================
// Analytics Event Tracking (Optional)
// ===================================

function trackEvent(category, action, label) {
    // Placeholder for Google Analytics or other tracking
    console.log(`Event: ${category} - ${action} - ${label}`);
}

// Resume Download and Open Functionality
document.querySelectorAll('.resume-download-btn').forEach(resumeBtn => {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const resumeUrl = resumeBtn.getAttribute('href');

        // Track analytics event
        trackEvent('Resume', 'Download', 'Resume PDF');

        // Open PDF in new tab
        window.open(resumeUrl, '_blank');

        // Trigger download simultaneously
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeUrl;
        downloadLink.download = 'Rahul-Garg-Resume.pdf';
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});

// Track external link clicks
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        trackEvent('External Link', 'Click', href);
    });
});

// ===================================
// End of Script
// ===================================
