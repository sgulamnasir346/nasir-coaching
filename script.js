// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// AJAX Form submission for Formspree (Responsive email & data wise)
const form = document.getElementById('inquiryForm');
const successMsg = document.getElementById('formSuccess');

if(form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'json'
                }
            });
            
            if(response.ok) {
                form.style.display = 'none';
                successMsg.style.display = 'flex';
            } else {
                alert('Oops! There was a problem submitting your form. Please call us directly at 8898495080.');
            }
        } catch(error) {
            alert('Network error. Please check your connection or WhatsApp us directly.');
        }
    });
}