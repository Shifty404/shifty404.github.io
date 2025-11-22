document.addEventListener('DOMContentLoaded', () => {
    // Custom Slow Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                smoothScrollTo(targetSection, 2000); // 2000ms duration for slower scroll
            }
        });
    });

    function smoothScrollTo(element, duration) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);

            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.section, .card, .hero-content');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Cat Animation State Manager
    const catContainer = document.getElementById('cat-container');
    const sections = {
        'hero': 'playing',
        'education': 'studying',
        'projects': 'looking',
        'research': 'researching',
        'contact': 'talking'
    };

    const stateObserverOptions = {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9] // Multiple thresholds for better accuracy
    };

    const sectionRatios = {};

    const stateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            sectionRatios[entry.target.id] = entry.intersectionRatio;
        });

        // Find section with highest intersection ratio
        let maxRatio = 0;
        let activeSection = null;

        Object.keys(sectionRatios).forEach(sectionId => {
            if (sectionRatios[sectionId] > maxRatio) {
                maxRatio = sectionRatios[sectionId];
                activeSection = sectionId;
            }
        });

        if (activeSection && sections[activeSection]) {
            const newState = sections[activeSection];
            // Remove all state classes
            Object.values(sections).forEach(state => catContainer.classList.remove(state));
            // Add new state class
            catContainer.classList.add(newState);

            // Update Active Navigation Link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + activeSection) {
                    link.classList.add('active');
                }
            });
        }
    }, stateObserverOptions);

    // Observe all sections for state changes
    Object.keys(sections).forEach(id => {
        const el = document.getElementById(id);
        if (el) stateObserver.observe(el);
    });

    // Typing Animation
    const subtitleText = "Researcher & Developer";
    const subtitleElement = document.getElementById('hero-subtitle');
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < subtitleText.length) {
            subtitleElement.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100); // Typing speed
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // Mobile Menu Toggle (Simple implementation)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
                navLinks.style.width = '100%';
                navLinks.style.padding = '2rem';
                navLinks.style.textAlign = 'center';
            }
        });
    }
});
