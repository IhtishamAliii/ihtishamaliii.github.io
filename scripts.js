// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// TOGGLE MENU FOR MOBILES --- START HERE
// Toggle the menu on hamburger click
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}




// Trigger visibility for footer links after page load
document.addEventListener("DOMContentLoaded", function() {
    const footerLinks = document.querySelector('.footer-links');
    const footerSocial = document.querySelector('.footer-social');
    setTimeout(() => {
        footerLinks.classList.add('visible');
        footerSocial.classList.add('visible');
    }, 300);
});

// TOGGLE MENU FOR MOBILES --- END HERE


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ACHIEVEMENT SECTION ANIMATION --- START HERE

window.onload = function() {
    // Initialize Tilt Effect with mobile detection
    if (window.innerWidth > 768) {
        VanillaTilt.init(document.querySelectorAll(".stat-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02
        });
    }

    // Particles Configuration
    // particlesJS("particles-js", {
    //     particles: {
    //         number: { value: window.innerWidth < 768 ? 40 : 80, density: { enable: true, value_area: 800 } },
    //         color: { value: "#60a5fa" },
    //         shape: { type: "circle" },
    //         opacity: {
    //             value: 0.5,
    //             random: true,
    //             animation: { enable: true, speed: 1 }
    //         },
    //         size: {
    //             value: 3,
    //             random: true,
    //             animation: { enable: true, speed: 3 }
    //         },
    //         line_linked: {
    //             enable: true,
    //             distance: 150,
    //             color: "#60a5fa",
    //             opacity: 0.2,
    //             width: 1
    //         },
    //         move: {
    //             enable: true,
    //             speed: window.innerWidth < 768 ? 1 : 2,
    //             direction: "none",
    //             random: true,
    //             out_mode: "out"
    //         }
    //     },
    //     interactivity: {
    //         detect_on: "canvas",
    //         events: {
    //             onhover: { enable: true, mode: "repulse" },
    //             onclick: { enable: true, mode: "push" },
    //             resize: true
    //         }
    //     }
    // });

    // particlesJS.load('particles-js', 'particles.json', function() {
    //     console.log('particles.js loaded');
    // });

    // Counter Animation
    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, stepTime);
    }

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const counter = card.querySelector('.counter');
            const progressBar = card.querySelector('.progress-bar');

            if (entry.isIntersecting) {
                // Trigger counter animation if in view
                if (counter) {
                    animateCounter(counter, parseInt(counter.dataset.target));
                }

                // Trigger progress bar animation if in view
                if (progressBar) {
                    progressBar.style.width = `${progressBar.dataset.progress}%`;
                }
            } else {
                // Reset progress bar and counter when out of view
                if (progressBar) {
                    progressBar.style.width = '0'; // Reset progress bar width
                }

                if (counter) {
                    counter.textContent = '0'; // Reset counter to zero
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stat-card').forEach(card => {
        observer.observe(card);
    });

    // Disable tilt on mobile devices
    function handleResize() {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.stat-card').forEach(card => {
                card.vanillaTilt && card.vanillaTilt.destroy(); // Destroy VanillaTilt for mobile
            });
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call this immediately to disable tilt on page load for mobile
};


// ACHIEVEMENT SECTION ANIMATION --- END HERE

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// SERVICES SECTION --- START HERE

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const cards = Array.from(document.querySelectorAll('.card'));
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const progress = document.querySelector('.progress');

    let currentIndex = 4;
    let startX = 0;
    let isDragging = false;
    let startScrollLeft = 0;
    let autoplayInterval;

    function updateSlider() {
        const containerWidth = track.parentElement.offsetWidth;
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(track).gap);
        const offset = (containerWidth - cardWidth) / 2;

        track.style.transform = `translateX(${-currentIndex * (cardWidth + gap) + offset}px)`;

        // Update active state
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
            // Add fade effect for neighboring cards
            const distance = Math.abs(index - currentIndex);
            card.style.opacity = distance === 0 ? 1 : Math.max(0.6, 1 - distance * 0.2);
        });

        // Update progress bar
        progress.style.width = `${((currentIndex) / (cards.length - 1)) * 100}%`;

        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === cards.length - 1;
    }

    function moveSlider(direction) {
        currentIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
        updateSlider();
        resetAutoplay();
    }

    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            if (currentIndex < cards.length - 1) {
                moveSlider(1);
            } else {
                currentIndex = 0;
                updateSlider();
            }
        }, 5000); // Change slides every 5 seconds
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => moveSlider(-1));
    nextBtn.addEventListener('click', () => moveSlider(1));

    // Touch events
    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startScrollLeft = currentIndex;
        clearInterval(autoplayInterval);
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].clientX;
        const walk = startX - x;

        if (Math.abs(walk) > 50) {
            if (walk > 0 && currentIndex < cards.length - 1) {
                moveSlider(1);
                isDragging = false;
            } else if (walk < 0 && currentIndex > 0) {
                moveSlider(-1);
                isDragging = false;
            }
        }
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
        startAutoplay();
    });

    // Mouse events for desktop
    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        startScrollLeft = currentIndex;
        clearInterval(autoplayInterval);
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = startX - x;

        if (Math.abs(walk) > 50) {
            if (walk > 0 && currentIndex < cards.length - 1) {
                moveSlider(1);
                isDragging = false;
            } else if (walk < 0 && currentIndex > 0) {
                moveSlider(-1);
                isDragging = false;
            }
        }
    });

    track.addEventListener('mouseup', () => {
        isDragging = false;
        startAutoplay();
    });

    track.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            startAutoplay();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') moveSlider(-1);
        if (e.key === 'ArrowRight') moveSlider(1);
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateSlider, 100);
    });

    // Add click handlers for cards
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            resetAutoplay();
        });
    });

    // Pause autoplay when user hovers over slider
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    track.addEventListener('mouseleave', () => {
        startAutoplay();
    });

    // Initialize slider
    updateSlider();
    startAutoplay();
});



// Select all buttons with the class 'explore-btn'
const exploreButtons = document.querySelectorAll('.explore-btn');

// Specify the link to redirect to
const redirectLink = 'https://api.whatsapp.com/send/?phone=923159396545';

// Add a click event listener to each button
exploreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action if needed
        // Open the specified link in a new tab
        window.open(redirectLink, '_blank');
    });
});

// SERVICES SECTION --- END HERE

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// TESTIMONIAL SECTION --- START HERE

const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

function showNextCard() {
    testimonialItems[currentIndex].classList.remove('active');
    testimonialItems[currentIndex].classList.add('prev');

    const prevIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
    const nextIndex = (currentIndex + 1) % testimonialItems.length;

    testimonialItems[prevIndex].classList.remove('prev');
    testimonialItems[prevIndex].classList.add('next');

    testimonialItems[nextIndex].classList.remove('next');
    testimonialItems[nextIndex].classList.add('active');

    currentIndex = nextIndex;
}

function showPrevCard() {
    testimonialItems[currentIndex].classList.remove('active');
    testimonialItems[currentIndex].classList.add('next');

    currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;

    testimonialItems[currentIndex].classList.remove('next');
    testimonialItems[currentIndex].classList.add('active');
}

setInterval(showNextCard, 4000);

// TESTIMONIAL SECTION --- END HERE

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// CONTACT US SECTION --- START HERE

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data using name attributes
    const name = event.target.name.value; // Use event.target to access the form values
    const message = event.target.message.value;

    // Define the WhatsApp number (including country code, without +)
    const phoneNumber = '923159396545'; // Replace with your WhatsApp number

    // Create the WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}. ${message}`;

    // Open WhatsApp chat with the pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab
}

// CONTACT US SECTION --- END HERE

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// CLIENT JOURNEY SECTION --- START HERE
let lastFlippedCard = null;

function flipCard(card) {
    const innerCard = card.querySelector('.flip-card-inner');

    if (lastFlippedCard && lastFlippedCard !== card) {
        lastFlippedCard.classList.remove('flipped');
        lastFlippedCard.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
    }

    if (innerCard.style.transform === 'rotateY(180deg)') {
        card.classList.remove('flipped');
        innerCard.style.transform = 'rotateY(0deg)';
        lastFlippedCard = null; // Reset last flipped card if flipping back
    } else {
        card.classList.add('flipped');
        innerCard.style.transform = 'rotateY(180deg)';
        lastFlippedCard = card; // Update last flipped card
    }
}

// CLIENT JOURNEY SECTION --- END HERE

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// PACKAGE BUILDER SECTION --- START HERE

const services = [{
        name: 'Quantum Social Amplification',
        price: 750,
        icon: '<i class="fas fa-user-friends"></i>', // Change emoji to Font Awesome icon
        description: 'Harness the power of quantum entanglement to boost your social media presence across multiple dimensions.',
        tasks: [
            'Multidimensional content strategy',
            'Quantum engagement optimization',
            'Parallel universe audience targeting',
            'Entangled hashtag creation'
        ]
    },
    {
        name: 'Hyperdrive Lead Generation',
        price: 950,
        icon: '<i class="fas fa-rocket"></i>', // Change emoji to Font Awesome icon
        description: 'Accelerate your lead acquisition to light speed with our AI-powered hyperdrive algorithms.',
        tasks: [
            'Warp-speed funnel optimization',
            'AI-driven lead scoring',
            'Temporal targeting campaigns',
            'Hyperspace remarketing tactics'
        ]
    },
    {
        name: 'Neuromantic Web Design',
        price: 1800,
        icon: '<i class="fas fa-brain"></i>', // Change emoji to Font Awesome icon
        description: 'Create immersive, mind-bending websites that adapt to users\' thoughts and emotions.',
        tasks: [
            'Emotion-responsive layouts',
            'Thought-triggered animations',
            'Synaptic navigation systems',
            'Neuro-linguistic optimization'
        ]
    },
    {
        name: 'Holographic Content Creation',
        price: 800,
        icon: '<i class="fas fa-eye"></i>', // Change emoji to Font Awesome icon
        description: 'Produce stunning 4D holographic content that engages audiences on a whole new level.',
        tasks: [
            '4D asset creation and animation',
            'Holographic storytelling techniques',
            'Multisensory content integration',
            'Spatial audio engineering'
        ]
    },
    {
        name: 'Quantum SEO Optimization',
        price: 1100,
        icon: '<i class="fas fa-search"></i>', // Change emoji to Font Awesome icon
        description: 'Optimize your digital presence across parallel universes and search engine multiverse.',
        tasks: [
            'Multiverse keyword research',
            'Quantum link building strategies',
            'Parallel SERP analysis',
            'Interdimensional content optimization'
        ]
    },
    {
        name: 'Telepathic Email Marketing',
        price: 600,
        icon: '<i class="fas fa-paper-plane"></i>', // Change emoji to Font Awesome icon
        description: 'Reach your audience\'s subconscious with our cutting-edge telepathic email technology.',
        tasks: [
            'Subconscious subject line crafting',
            'Psychic segmentation and personalization',
            'Thought-triggered automation flows',
            'Astral plane deliverability optimization'
        ]
    }
];


const servicesContainer = document.getElementById('services');
const packageContainer = document.getElementById('package');
const totalPriceElement = document.getElementById('total-price');
const submitButton = document.getElementById('submit-package');
const dimensionalPortal = document.getElementById('dimensional-portal');

let selectedServices = [];

function updatePackage() {
    packageContainer.innerHTML = '';
    let totalPrice = 0;

    selectedServices.forEach(service => {
        const packageItem = document.createElement('div');
        packageItem.classList.add('package-item');
        packageItem.innerHTML = `
                <div class="pkg-icon">${service.icon}</div>
                <h3>${service.name}</h3>
                <p class="price">$${service.price}</p>
            `;
        packageItem.addEventListener('click', () => removeService(service));
        packageContainer.appendChild(packageItem);
        totalPrice += service.price;
    });

    totalPriceElement.textContent = `Total: $${totalPrice}`;
    totalPriceElement.style.setProperty('--value', totalPrice);
}

function addService(service) {
    if (!selectedServices.includes(service)) {
        selectedServices.push(service);
        updatePackage();
    }
}

function removeService(service) {
    selectedServices = selectedServices.filter(s => s !== service);
    updatePackage();
}

services.forEach(service => {
    const serviceElement = document.createElement('div');
    serviceElement.classList.add('service');
    serviceElement.innerHTML = `
            <div class="pkg-icon">${service.icon}</div>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <ul class="task-list">
                ${service.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
            <p class="price">$${service.price}</p>
        `;
    serviceElement.addEventListener('click', () => addService(service));
    servicesContainer.appendChild(serviceElement);
});

submitButton.addEventListener('click', () => {
    dimensionalPortal.classList.add('active');
    setTimeout(() => {
        dimensionalPortal.classList.remove('active');
        showConfirmation();
    }, 3000);
});

function showConfirmation() {
    const totalInvestment = selectedServices.reduce((sum, service) => sum + service.price, 0);
    const confirmationMessage = `Thank you for building your Quantum Nexus package! Our interdimensional sales team will contact you shortly across all parallel universes. Total investment: $${totalInvestment}`;

    const confirmation = document.createElement('div');
    confirmation.style.position = 'fixed';
    confirmation.style.top = '50%';
    confirmation.style.left = '50%';
    confirmation.style.transform = 'translate(-50%, -50%)';
    confirmation.style.background = 'rgba(0, 0, 0, 0.8)';
    confirmation.style.padding = '2rem';
    confirmation.style.borderRadius = '15px';
    confirmation.style.maxWidth = '90%'; // Change max width for better responsiveness
    confirmation.style.width = '300px'; // Set a fixed width for smaller screens
    confirmation.style.textAlign = 'center';
    confirmation.style.zIndex = '1001';
    confirmation.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)'; // Optional shadow for better visibility
    confirmation.innerHTML = `
        <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Interdimensional Package Confirmed!</h2>
        <p style="color: var(--text-color); margin-bottom: 1rem;">${confirmationMessage}</p>
        <button id="decide-later" style="background: var(--secondary-color); color: var(--bg-color); border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; margin-right: 10px;">Decide Later</button>
        <button id="contact-now" style="background: var(--secondary-color); color: var(--bg-color); border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">Contact Now</button>
    `;
    document.body.appendChild(confirmation);

    // "Decide Later" button functionality
    document.getElementById('decide-later').addEventListener('click', () => {
        confirmation.remove();
    });

    // "Contact Now" button functionality
    document.getElementById('contact-now').addEventListener('click', () => {
        const serviceNames = selectedServices.map(service => service.name).join(', ');
        const message = `I am interested in the following services: ${serviceNames}. Total investment: $${totalInvestment}.`;
        const whatsappNumber = '923159396545'; // Replace with your WhatsApp number
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank'); // Open WhatsApp message in a new tab
    });
}

// Add hover effects to services
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('mouseover', () => {
        service.style.transform = 'scale(1.05) rotate(2deg)';
    });
    service.addEventListener('mouseout', () => {
        service.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add particle effect to the background
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.opacity = '0';
    particle.style.transition = 'all 3s ease';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        particle.style.opacity = '1';
    }, 100);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}

setInterval(createParticle, 200);

// Add quantum fluctuation effect to the total price
function quantumFluctuation() {
    const originalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
    const fluctuation = Math.random() * 20 - 10; // Random number between -10 and 10
    const fluctuatedPrice = originalPrice + fluctuation;
    totalPriceElement.textContent = `Total: $${fluctuatedPrice.toFixed(2)}`;

    setTimeout(() => {
        totalPriceElement.textContent = `Total: $${originalPrice}`;
    }, 500);
}

setInterval(quantumFluctuation, 3000);

// Add a typing effect to the service descriptions
function typeEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.querySelectorAll('.service p').forEach(description => {
    const originalText = description.textContent;
    description.textContent = '';
    description.addEventListener('mouseover', () => {
        typeEffect(description, originalText);
    });
});

// PACKAGE BUILDER SECTION --- END HERE