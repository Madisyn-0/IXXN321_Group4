const subscribe = document.getElementById('email-button');
const newsletterHeading = document.getElementById('newsletter');
const inputEmail = document.getElementById('email-input');
const label = document.getElementById('email');
const text = document.getElementById('newsletter-text');

 subscribe.addEventListener('click', () => {
   if (inputEmail.value.length == 0) {
      label.textContent = 'Please enter your email address';
      label.style.fontWeight = 700;
   }else {
      newsletterHeading.textContent = 'Thank you for subscribing!';
      label.style.display = 'none';
      newsletterHeading.style.color = '#1F524F';
      subscribe.style.display = 'none';
      inputEmail.style.display = 'none';
      text.textContent = `We will send you a confirmaiton email at ${inputEmail.value}`;
   }

 });
