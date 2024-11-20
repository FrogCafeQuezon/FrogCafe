document.addEventListener("DOMContentLoaded", () => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default jump to the anchor

            const targetId = this.getAttribute("href").substring(1); // Extract the ID
            const targetElement = document.getElementById(targetId); // Find the target element

            if (targetElement) {
                const headerOffset = document.querySelector("header").offsetHeight; // Adjust for fixed header height
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Smooth scrolling behavior
                });
            }
        });
    });
});
