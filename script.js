// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to rainbow letters
document.querySelectorAll('.rainbow-name .letter').forEach(letter => {
    letter.addEventListener('mouseenter', function() {
        this.style.transform = this.style.transform.replace('scale(1)', 'scale(1.3)');
    });
});

