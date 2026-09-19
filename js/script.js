document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");
    const submenuToggle = document.querySelector(".submenu-toggle");
    const submenu = document.querySelector(".submenu");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    if (submenuToggle && submenu) {
        submenuToggle.addEventListener("click", () => {
            const isOpen = submenu.classList.toggle("is-open");
            submenuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    const contactForm = document.getElementById("contact-form");
    const contactFormStatus = document.getElementById("contact-form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const subject = encodeURIComponent(formData.get("sujet"));
            const body = encodeURIComponent(`Nom : ${formData.get("nom")}\nE-mail : ${formData.get("email")}\n\n${formData.get("message")}`);
            window.location.href = `mailto:contact@africanvisionaries.org?subject=${subject}&body=${body}`;
            if (contactFormStatus) contactFormStatus.textContent = "Votre logiciel de messagerie va préparer le message.";
        });
    }

});