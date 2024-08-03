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






// Function to show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Show the popup after a delay (e.g., 3 seconds)
setTimeout(showPopup, 3000);

// Close the popup when the user clicks the close button
document.querySelector('.close-btn').addEventListener('click', hidePopup);

// Close the popup when the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        hidePopup();
    }
}






// Define the email and phone number components
var emailUser = "toorhat";
var emailDomain = "gmail.com";
var phoneNumber = "+923159396545";

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












