// --- SCROLL ANIMATION ---
let scrollY = window.scrollY;

// Initially hide all reveals if JS is working
document.querySelectorAll('.reveal').forEach(el => el.classList.add('hide'));

const checkReveals = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 50; // Lowered threshold to trigger earlier
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.remove('hide');
        }
    });
};

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    checkReveals();
});

// Initial check to reveal elements that might already be in view
checkReveals();

// --- CARD FLIP INTERACTION ---
const mainCard = document.querySelector('#main-card');

if (mainCard) {
    mainCard.addEventListener('click', (e) => {
        // Don't flip if clicking an option button
        if (e.target.classList.contains('option-btn')) return;
        
        mainCard.classList.toggle('is-flipped');
    });
}

// --- EXPANDABLE CARDS INTERACTION ---
const expandableCards = document.querySelectorAll('.expandable-card');
expandableCards.forEach(card => {
    card.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        if (isExpanded) {
            expandableCards.forEach(c => c.classList.remove('expanded'));
        } else {
            expandableCards.forEach(c => c.classList.add('expanded'));
        }
    });
});


