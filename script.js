const track = document.getElementById("sliderTrack");
let slides = document.querySelectorAll(".slide");

let position = 0;
const speed = 0.3; // más bajo = más romántico

function updateActiveSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[1].classList.add("active"); // la del centro
}

function animateSlider() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    const firstSlide = slides[0];
    const slideWidth = firstSlide.offsetWidth + 20;

    if (Math.abs(position) >= slideWidth) {
        track.appendChild(firstSlide);
        slides = document.querySelectorAll(".slide");
        position += slideWidth;
        updateActiveSlide();
    }

    requestAnimationFrame(animateSlider);
}

updateActiveSlide();
animateSlider();

const btnHR = document.getElementById("btn-hr");
const btnSurprise = document.getElementById("btn-surprise");

const sectionLine = document.getElementById("section-line");
const sectionSurprise = document.getElementById("section-widget");

// =====================
// CONTROL DE SCROLL (NUEVO)
// =====================

// 1. Bloquear scroll completamente al inicio
document.body.style.overflow = 'hidden';

// 2. Botón HR: Mostrar sección 2 y permitir scroll hacia arriba
btnHR.addEventListener("click", () => {
    if (!sectionLine.classList.contains("show-section")) {
        sectionLine.classList.add("show-section");
    }

    // Permitir scroll PERO limitado
    document.body.style.overflow = 'auto';
    
    // Hacer scroll a la sección 2
    sectionLine.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// 3. Botón Sorpresa: Mostrar sección 3 y permitir scroll completo
btnSurprise.addEventListener("click", () => {
    if (!sectionSurprise.classList.contains("show-section")) {
        sectionSurprise.classList.add("show-section");
    }

    // Scroll COMPLETAMENTE libre
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    // Hacer scroll a la sección 3
    sectionSurprise.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


const surpriseBtn = document.querySelector('#btn-surprise');
const widgetSection = document.querySelector('#section-widget');

surpriseBtn.addEventListener('click', () => {
    widgetSection.classList.add('show-section');
    widgetSection.scrollIntoView({ behavior: 'smooth' });
});



/* ===============================
   ANIMACIÓN TIMELINE
   =============================== */

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});


const widgetCards = document.querySelectorAll('.widget-card');
let widgetIndex = 0;

setInterval(() => {
    widgetCards[widgetIndex].classList.remove('active');

    widgetIndex = (widgetIndex + 1) % widgetCards.length;

    widgetCards[widgetIndex].classList.add('active');
}, 4000);


document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('uncovered');
    });
});
