const bouton = document.querySelector('.bouton');

bouton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden-section");
    let lastScrollY = window.scrollY;

    const revealSection = () => {
        let currentScrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100 && currentScrollY > lastScrollY) {
                // Ajoute l'effet seulement si on descend
                section.classList.add("show");
                section.classList.remove("hidden-again");
            } else if (currentScrollY < lastScrollY) {
                // Cache à nouveau si on remonte
                section.classList.remove("show");
                section.classList.add("hidden-again");
            }
        });

        lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", revealSection);
});