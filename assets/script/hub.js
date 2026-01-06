
        // Navigation function
        function navigateToPage(url) {
            window.location.href = url;
        }

        // Add click event listeners to each card
        // If pages are in same folder, use: 'portfolio.html'
        // If pages are in 'pages' folder, use: 'pages/portfolio.html'
        // If pages are in parent folder, use: '../portfolio.html'
        
        document.getElementById('portfolioCard').addEventListener('click', function() {
            navigateToPage('portfolio.html');  // Change path here if needed
        });

        document.getElementById('gamesCard').addEventListener('click', function() {
            navigateToPage('games.html');  // Change path here if needed
        });

        document.getElementById('quizzesCard').addEventListener('click', function() {
            navigateToPage('quizzes.html');  // Change path here if needed
        });

        document.getElementById('calculatorsCard').addEventListener('click', function() {
            navigateToPage('calculators.html');  // Change path here if needed
        });

        // Optional: Add keyboard navigation (Enter key on focused card)
        document.querySelectorAll('.card').forEach(card => {
            card.setAttribute('tabindex', '0');
            card.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    this.click();
                }
            });
        });

        // Optional: Add ripple effect on click
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    