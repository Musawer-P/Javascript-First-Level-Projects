document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomcard-btn');
    const cards = document.querySelectorAll('.first-randomcard-container');

    if (!button || cards.length === 0) {
        console.warn("Random card elements not found in the DOM.");
        return;
    }

    button.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('flipped'));
        const randomIndex = Math.floor(Math.random() * cards.length);
        const randomCard = cards[randomIndex];
        randomCard.classList.add('flipped');
    });
});
