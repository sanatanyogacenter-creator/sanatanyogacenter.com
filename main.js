// ===============================
// SANATAN YOGA CENTER
// main.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Contact Form Handler
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = this.querySelector('input[type="text"]').value.trim();
            const mobile = this.querySelector('input[type="tel"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector("textarea").value.trim();

            if (!name || !mobile || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            if (mobile.length < 10) {
                alert("Please enter a valid mobile number.");
                return;
            }

            alert(
                "Thank you, " +
                name +
                "! Your message has been received. We will contact you soon."
            );

            this.reset();
        });
    }

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(
        ".card, .review-card, .point"
    );

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Dynamic Footer Year
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            `© ${new Date().getFullYear()} Sanatan Yoga Center. All Rights Reserved.`;
    }

});