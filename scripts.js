document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Add scroll event listener for header background
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
});





// Variable to check if the popup has been closed
let isPopupClosed = false;

// Function to show the popup
function showPopup() {
    if (!isPopupClosed) {
        document.getElementById('popup').style.display = 'flex';
    }
}

// Show the popup after a delay (e.g., 3 seconds)
setTimeout(showPopup, 30000);

// Function to hide the popup
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    isPopupClosed = true; // Set the flag to true when the popup is closed
}



// Close the popup when the user clicks the close button
document.querySelector('.close-btn').addEventListener('click', hidePopup);

// Close the popup when the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        hidePopup();
    }
}



// Add Tags



// Toggle Card
function toggleAccordion(header) {
    const content = header.nextElementSibling;


    // Close all open accordions
    document.querySelectorAll('.accordion-content').forEach(item => {
        // var cardd = document.querySelector('.card');


        if (item !== content) {
            item.style.display = 'none';
            // item.parentNode.style.height = 'fit-content';
            item.parentNode.style.height = '500px';

        } else {
            // item.parentNode.style.height = '500px';
            item.parentNode.style.height = 'fit-content';

        }
    });

    // Toggle the clicked accordion
    // content.style.display = content.style.display === 'block' ? 'none' : 'block';
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }

}





// Define the email and phone number components
var emailUser = "info";
var emailDomain = "ihtishamali.com";
var phoneNumber = "+92 315 9396545";

// Combine to form the full email address
var email = emailUser + "@" + emailDomain;

// Function to show the email
function showEmail() {
    document.getElementById("email-placeholder").innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
}

// Function to show the phone number
function showPhone() {
    document.getElementById("phone-placeholder").innerHTML = '<a href="tel:' + phoneNumber + '">' + phoneNumber + '</a>';
}

// Attach the functions to the span click events
document.getElementById("email-placeholder").onclick = showEmail;
document.getElementById("phone-placeholder").onclick = showPhone;



















// Function to animate stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat, index) => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 1500; // Animation duration in milliseconds
        const frameDuration = 1000 / 60; // 60 FPS
        const totalFrames = Math.round(duration / frameDuration);
        const easeOutQuad = t => t * (2 - t);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(target * progress);

            if (frame === totalFrames) {
                clearInterval(counter);
                stat.textContent = target;
                animateCircle(index, 100);
            } else {
                stat.textContent = currentCount;
                animateCircle(index, progress * 100);
            }
        }, frameDuration);
    });
}

// Function to animate circle
function animateCircle(index, percent) {
    const circles = document.querySelectorAll('.circle');
    circles[index].style.strokeDasharray = `${percent}, 100`;
}

// Function to reset stats
function resetStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => {
        stat.textContent = '0';
    });

    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
        circle.style.strokeDasharray = '0, 100';
    });
}

const statsSection = document.getElementById('stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            resetStats();
            animateStats();
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);






const prices = {
    'Social Media Marketing': {
        USD: 800, // Competitive US market rate
        PKR: 15000, // Adjusted for Pakistani market
        GBP: 600, // UK market rate
        AED: 2500 // Competitive UAE rate
    },
    'Digital Marketing': {
        USD: 1500,
        PKR: 30000,
        GBP: 1200,
        AED: 5000
    },
    'Content Writing': {
        USD: 200,
        PKR: 5000,
        GBP: 150,
        AED: 700
    },
    'HR Management': {
        USD: 1200,
        PKR: 25000,
        GBP: 900,
        AED: 4000
    },
    'Business Development': {
        USD: 1500,
        PKR: 35000,
        GBP: 1200,
        AED: 5000
    },
    'Leads Generation': {
        USD: 600,
        PKR: 12000,
        GBP: 450,
        AED: 2000
    },
    'Brand Promotion': {
        USD: 1000,
        PKR: 20000,
        GBP: 800,
        AED: 3500
    },
    'SEO & GEO': {
        USD: 750,
        PKR: 15000,
        GBP: 600,
        AED: 2500
    },
    'Meta Ads': {
        USD: 500,
        PKR: 10000,
        GBP: 400,
        AED: 1800
    },
    'Google Ads': {
        USD: 600,
        PKR: 12000,
        GBP: 450,
        AED: 2000
    },
    'Email Marketing': {
        USD: 400,
        PKR: 8000,
        GBP: 300,
        AED: 1500
    },
    'Website Designing': {
        USD: 1500,
        PKR: 35000,
        GBP: 1200,
        AED: 5000
    },
    'Graphic Designing': {
        USD: 400,
        PKR: 8000,
        GBP: 300,
        AED: 1500
    },
    'Video Editing': {
        USD: 600,
        PKR: 12000,
        GBP: 450,
        AED: 2000
    },
    'Business & Personal Branding': {
        USD: 1200,
        PKR: 25000,
        GBP: 900,
        AED: 4000
    },
    'B2B Marketing': {
        USD: 1500,
        PKR: 30000,
        GBP: 1200,
        AED: 5000
    },
    'Ecommerce Management': {
        USD: 1000,
        PKR: 20000,
        GBP: 800,
        AED: 3500
    },
    'Web Scraping': {
        USD: 400,
        PKR: 8000,
        GBP: 300,
        AED: 1500
    },
    'Data Analysis': {
        USD: 800,
        PKR: 18000,
        GBP: 600,
        AED: 2800
    },
    'Assignment Writing': {
        USD: 150,
        PKR: 4000,
        GBP: 120,
        AED: 500
    },
    'Virtual Assistant': {
        USD: 500,
        PKR: 10000,
        GBP: 400,
        AED: 1800
    },
    'Amazon Services': {
        USD: 800,
        PKR: 18000,
        GBP: 600,
        AED: 2800
    },
    'Email Scraping': {
        USD: 250,
        PKR: 6000,
        GBP: 200,
        AED: 900
    },
    'Job Hunting': {
        USD: 300,
        PKR: 7000,
        GBP: 250,
        AED: 1000
    },
    'Business Analysis': {
        USD: 1200,
        PKR: 22000,
        GBP: 900,
        AED: 4000
    },
    'Copywriting': {
        USD: 400,
        PKR: 8000,
        GBP: 300,
        AED: 1500
    },
    'Online Investigation': {
        USD: 600,
        PKR: 12000,
        GBP: 450,
        AED: 2000
    },
    'IT Support': {
        USD: 800,
        PKR: 18000,
        GBP: 600,
        AED: 2800
    },
    'AI Marketing': {
        USD: 1200,
        PKR: 25000,
        GBP: 900,
        AED: 4000
    },
    'Product Research & Hunting': {
        USD: 600,
        PKR: 12000,
        GBP: 450,
        AED: 2000
    },
    'Photo Editing': {
        USD: 250,
        PKR: 6000,
        GBP: 200,
        AED: 900
    },
    'Data Cleaning': {
        USD: 400,
        PKR: 8000,
        GBP: 300,
        AED: 1500
    },
    'Resume Designing': {
        USD: 100,
        PKR: 2500,
        GBP: 80,
        AED: 350
    },
    'Pinterest Marketing': {
        USD: 500,
        PKR: 10000,
        GBP: 400,
        AED: 1800
    }
};

// Fetch user's IP address using ipify API
async function getUserIp() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        console.log("IP: ", data.ip);
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return null;
    }
}

// Fetch location data based on IP using ip-api
async function getUserLocation(ip) {
    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();
        if (data.status === 'success') {
            console.log("Country: ", data.country)
            return { country: data.country, countryCode: data.countryCode };
        } else {
            throw new Error('Location data fetch failed');
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        return { country: 'Unknown', countryCode: 'US' }; // Default to 'US' if there's an error
    }
}

function getCurrencyFromCountry(countryCode) {
    const countryToCurrency = {
        'PK': 'PKR',
        'GB': 'GBP',
        'AE': 'AED',
        'US': 'USD',
        // Add more country codes and currencies here
    };

    return countryToCurrency[countryCode] || 'USD'; // Default to USD
}

function formatPrice(price) {
    return price.toFixed(0); // Format price to two decimal places
}

async function updatePrices() {
    const ip = await getUserIp();
    if (ip) {
        const { countryCode } = await getUserLocation(ip);
        const currency = getCurrencyFromCountry(countryCode);

        const serviceElements = document.querySelectorAll('.price-tag');

        serviceElements.forEach(el => {
            const serviceName = el.closest('.card').querySelector('h3').textContent;
            if (prices[serviceName]) {
                const priceInCurrency = prices[serviceName][currency];
                el.textContent = `Starts From ${formatPrice(priceInCurrency)} ${currency}`;
            }
        });
    }
}

// Call the function to update prices when the page loads
updatePrices();









// Function to handle when elements intersect with the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            // Apply animation class for h2 tags
            if (element.tagName === 'H2') {
                element.classList.remove('animate-h2');
                void element.offsetWidth; // Trigger reflow
                element.classList.add('animate-h2');
            }
            // Apply animation class for h3 tags
            if (element.tagName === 'H3') {
                element.classList.remove('animate-h3');
                void element.offsetWidth; // Trigger reflow
                element.classList.add('animate-h3');
            }
            // Apply animation class for p tags
            if (element.tagName === 'P') {
                element.classList.remove('animate-p');
                void element.offsetWidth; // Trigger reflow
                element.classList.add('animate-p');
            }
        }
    });
}

// Create an Intersection Observer instance
const scrollObserver = new IntersectionObserver(handleIntersection, {
    threshold: 0.1 // Adjust as needed
});

// Target all h2, h3, and p elements
document.querySelectorAll('h2, h3, p').forEach(element => {
    scrollObserver.observe(element);
});
