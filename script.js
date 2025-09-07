document.addEventListener('DOMContentLoaded', function() {
    // Google Form is now embedded directly in the HTML
    // No JavaScript form handling needed

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Demo link handler - track demo views
    const demoLink = document.getElementById('loom-demo-link');
    if (demoLink) {
        demoLink.addEventListener('click', function(e) {
            // Track demo view event (if you have analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'demo_view', {
                    event_category: 'engagement',
                    event_label: 'loom_demo'
                });
            }
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-item, .use-case').forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .feature-item, .use-case {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .feature-item.fade-in, .use-case.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
