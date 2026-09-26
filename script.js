/* loader */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1800);
});



/* ================================= */
/* HERO TYPING ANIMATION */
/* ================================= */

const heroTyping = document.getElementById("heroTyping");

if (heroTyping) {

    const heroRoles = [
        "Frontend Developer",
        "Web Developer",
        "Python Developer",
        "B.Tech CSE Student"
    ];

    let roleIndex = 0;
    let roleCharIndex = 0;
    let roleDeleting = false;

    function heroTypeEffect() {

        const currentRole = heroRoles[roleIndex];

        if (!roleDeleting) {

            heroTyping.textContent =
                currentRole.substring(0, roleCharIndex + 1);

            roleCharIndex++;

            if (roleCharIndex === currentRole.length) {

                roleDeleting = true;

                setTimeout(heroTypeEffect, 1600);

                return;
            }

        } else {

            heroTyping.textContent =
                currentRole.substring(0, roleCharIndex - 1);

            roleCharIndex--;

            if (roleCharIndex === 0) {

                roleDeleting = false;

                roleIndex++;

                if (roleIndex >= heroRoles.length) {
                    roleIndex = 0;
                }
            }
        }

        setTimeout(
            heroTypeEffect,
            roleDeleting ? 55 : 90
        );
    }

    heroTypeEffect();
}
/* ================================
   NAVBAR SCROLL EFFECT
================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});


/* ================================
   MOBILE MENU
================================ */

const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("div");

menuButton.classList.add("menu-button");

menuButton.innerHTML = `
    <i class="fa-solid fa-bars"></i>
`;

navbar.appendChild(menuButton);

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuButton.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


/* ================================
   SCROLL REVEAL
================================ */
const revealElements = document.querySelectorAll(
    ".about-container, .skills-box, .tools-box, .education-card, .timeline-item, .project-card, .certificate-card, .contact-container"
);
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================================
   BACK TO TOP
================================ */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================================
   CONTACT FORM
================================ */

/* ================================
   SKILL BAR ANIMATION
================================ */

const skillSection = document.querySelector(".skills");
const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                skillBars.forEach(bar => {

                    const width = bar.dataset.width;

                    bar.style.width = width;

                });

                skillObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.3
    }
);

if (skillSection) {
    skillObserver.observe(skillSection);
}
/* ============================= */
/* DARK / LIGHT MODE */
/* ============================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");
    }
});


/* ============================= */
/* REMEMBER USER'S THEME */
/* ============================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    const icon = themeToggle.querySelector("i");

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}
/* ================================= */
/* ACTIVE NAVBAR LINK */
/* ================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});
/* ================================= */
/* SCROLL PROGRESS */
/* ================================= */

const scrollProgress =
    document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        scrollPercentage + "%";

});