    // Navbar Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Contact Form Alert
    document.getElementById("contactform").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(
            "Details Submitted!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email
        );

        this.reset();
    });
