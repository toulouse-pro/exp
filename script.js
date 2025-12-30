document.addEventListener('DOMContentLoaded', () => {
    
    // Select all play buttons
    const playButtons = document.querySelectorAll('.play-btn');

    playButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Prevent other clicks
            e.stopPropagation();

            // Visual feedback
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('fa-play')) {
                // Reset all other buttons first
                resetAllButtons();
                
                // Change to pause icon
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                
                // Here you would add code to play the specific audio file
                console.log('Playing track...');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                console.log('Paused track...');
            }
        });
    });

    function resetAllButtons() {
        const allIcons = document.querySelectorAll('.play-btn i');
        allIcons.forEach(icon => {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        });
    }

    // Optional: Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
