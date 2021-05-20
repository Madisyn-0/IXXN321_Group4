const subscribe = document.getElementById('email-button');
const newsletterHeading = document.getElementById('newsletter');
const inputEmail = document.getElementById('email-input');
const newsletterDiv = document.getElementById('newsletter-content');
const label = document.getElementById('email');
const text =document.getElementById('newsletter-text');


 subscribe.addEventListener('click', () => {
    newsletterHeading.textContent = 'Thank you for subscribing!';
    email.style.display = 'none';
    newsletterHeading.style.color = '#1F524F';
    // email.style.fontSize = '30px';
    subscribe.style.display = 'none';
    inputEmail.style.display = 'none';
    text.textContent = 'We will send you a confirmaiton email!';
 });
