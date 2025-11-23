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

// Check if resume file exists and handle download
function checkResumeFile(event) {
    const resumeLink = event.currentTarget;
    const resumeUrl = resumeLink.getAttribute('href');
    
    // Try to fetch the file to see if it exists
    fetch(resumeUrl, { method: 'HEAD' })
        .then(response => {
            if (!response.ok) {
                event.preventDefault();
                alert('Resume file not found. Please add your resume.pdf file to the website folder.');
                return false;
            }
            // File exists, allow download
            return true;
        })
        .catch(error => {
            event.preventDefault();
            alert('Resume file not found. Please add your resume.pdf file to the website folder.');
            return false;
        });
    
    return true;
}

// Add click handler to resume links
document.querySelectorAll('a[href*="resume"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Check if file exists before allowing download
        fetch(this.getAttribute('href'), { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    e.preventDefault();
                    alert('Resume file not found. Please add your resume.pdf file to the website folder.');
                }
            })
            .catch(error => {
                e.preventDefault();
                alert('Resume file not found. Please add your resume.pdf file to the website folder.');
            });
    });
});

