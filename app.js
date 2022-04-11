const form = document.querySelector('form');
const message = document.querySelector('.thanks')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.classList.add('active');
    console.log('message sent');
})