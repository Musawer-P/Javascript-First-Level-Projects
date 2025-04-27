const button = document.getElementById('button');
const cards = document.querySelectorAll('.first');

button.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('flipped'));
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    randomCard.classList.add('flipped'); 
});
