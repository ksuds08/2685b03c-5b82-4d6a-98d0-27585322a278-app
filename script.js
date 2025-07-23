window.onload = function() {
    const ctaButtons = document.querySelectorAll('.cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Feature coming soon!');
        });
    });
};