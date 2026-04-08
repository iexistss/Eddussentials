// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Update aria-expanded attribute
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
        
        // Animate hamburger to X
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Navbar scroll effect with null check
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
        }
        
        lastScroll = currentScroll;
    });
}

// Smooth scroll for navigation links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for navbar height
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = document.querySelectorAll('.mission-card, .leader-card, .impact-item, .highlight-item, .spreading-stat-card');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    animateOnScroll.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Fallback: ensure all elements are visible after 1.5 seconds
    // in case the observer doesn't fire (slow connections, browser quirks)
    setTimeout(() => {
        animateOnScroll.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 1500);
} else {
    // Browser doesn't support IntersectionObserver — show everything immediately
    animateOnScroll.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
}

// Parallax effect removed to prevent About section from overlapping with hero
// The parallax was causing the hero to move down and cover content below

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle video placeholder interaction
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // Create a more user-friendly modal message
        const message = [
            'To add your research video:',
            '',
            '',
            '',
            '',
            '',
            ''
        ].join('\n');
        alert(message);
    });
}

// Handle photo placeholder clicks
const photoPlaceholders = document.querySelectorAll('.empty-photo-placeholder');
if (photoPlaceholders.length > 0) {
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const message = [
                'charlie kirk',
                '',
                '',
                '',
                '',
                '',
                '',
                ''
            ].join('\n');
            alert(message);
        });
    });
}

// Lazy loading for images (when actual images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal animation to sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// Print friendly version
window.addEventListener('beforeprint', () => {
    navMenu.classList.remove('active');
});

// Easter egg: Console message
console.log('%cEdussentials', 'color: #3498db; font-size: 24px; font-weight: bold;');
console.log('%cEducation for All, Hope for the Future', 'color: #2c3e50; font-size: 14px;');
console.log('Visit us to learn more about our mission to provide educational materials to underprivileged children.');

// Site visit counter & line graph using localStorage
(function () {
    const BASE_COUNT = 120;
    const HISTORY_DAYS = 7;
    const MIN_SEED_VISITS = 10;
    const SEED_RANGE = 20;

    // Returns today's date string YYYY-MM-DD
    function today() {
        return new Date().toISOString().slice(0, 10);
    }

    // Load or initialise daily history (last HISTORY_DAYS days)
    function loadHistory() {
        try {
            return JSON.parse(localStorage.getItem('edussentials_daily_visits') || '{}');
        } catch (e) {
            return {};
        }
    }

    function saveHistory(history) {
        localStorage.setItem('edussentials_daily_visits', JSON.stringify(history));
    }

    // Build an array of {date, count} for the last N days
    function buildSeries(history) {
        const series = [];
        for (let i = HISTORY_DAYS - 1; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().slice(0, 10);
            series.push({ date: key, count: history[key] || 0 });
        }
        return series;
    }

    // Seed history with plausible base data so the chart always has something to show
    function seedHistory(history) {
        let changed = false;
        for (let i = HISTORY_DAYS - 1; i >= 1; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().slice(0, 10);
            if (!(key in history)) {
                // Generate a value between 10 and 30 based on day offset for a realistic curve
                history[key] = Math.floor(MIN_SEED_VISITS + Math.random() * SEED_RANGE + (HISTORY_DAYS - i));
                changed = true;
            }
        }
        return changed;
    }

    // Count this session once
    const history = loadHistory();
    const todayKey = today();

    const seeded = seedHistory(history);

    if (!sessionStorage.getItem('edussentials_session_counted')) {
        sessionStorage.setItem('edussentials_session_counted', '1');
        history[todayKey] = (history[todayKey] || 0) + 1;
        saveHistory(history);
    } else if (seeded) {
        saveHistory(history);
    }

    // Total = BASE_COUNT + sum of all daily counts
    const total = BASE_COUNT + Object.values(history).reduce((a, b) => a + b, 0);

    const countEl = document.getElementById('site-visit-count');
    if (countEl) {
        countEl.textContent = total.toLocaleString();
    }

    // Render Chart.js line graph
    const canvas = document.getElementById('visitorChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const series = buildSeries(history);
    const labels = series.map(s => {
        const d = new Date(s.date + 'T00:00:00');
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    const data = series.map(s => s.count);

    const ctx = canvas.getContext('2d');

    // Gradient fill under the line
    const gradient = ctx.createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.03)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Visitors',
                data: data,
                borderColor: '#ffffff',
                borderWidth: 2.5,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: 'rgba(118,75,162,0.8)',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                backgroundColor: gradient,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(30, 15, 50, 0.85)',
                    titleColor: '#fff',
                    bodyColor: '#e0d0f8',
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        label: ctx => `${ctx.parsed.y} visitor${ctx.parsed.y !== 1 ? 's' : ''}`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    ticks: { color: 'rgba(255,255,255,0.8)', font: { size: 11 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    ticks: {
                        color: 'rgba(255,255,255,0.8)',
                        font: { size: 11 },
                        precision: 0
                    }
                }
            }
        }
    });
}());
