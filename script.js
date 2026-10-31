
// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// WhatsApp contact number
// Replace this with the restaurant's actual number.
// Include country code 91, without + or spaces.

const phoneNumber = "919876543210";

// Order buttons

document.querySelectorAll(".order-btn").forEach(function (button) {

    button.addEventListener("click", function () {

        const itemName = button.dataset.item;

        const message = "Hello! I want to order " + itemName;

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});

// Main contact button

document.getElementById("contactBtn").addEventListener("click", function (event) {

    event.preventDefault();

    const message = "Hello! I want to know more about your restaurant.";

    const whatsappURL =
        "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});
