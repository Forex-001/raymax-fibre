// Smooth welcome
window.addEventListener("load", () => {
    console.log("Welcome to Raymax Fibre");
});

// Highlight active navigation while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ffd43b";
        }
    });
});

// Back to top on page refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
