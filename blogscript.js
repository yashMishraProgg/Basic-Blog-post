// Scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Header scroll effect
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
            lastScrollY = window.scrollY;
        });

        // Newsletter form handling
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            if (email) {
                alert('Thank you for subscribing! 🎉');
                e.target.querySelector('input').value = '';
            }
        });

        // Add hover effects to posts
        document.querySelectorAll('.post').forEach(post => {
            post.addEventListener('mouseenter', () => {
                post.style.borderColor = '#667eea';
            });
            
            post.addEventListener('mouseleave', () => {
                post.style.borderColor = '#eee';
            });
        });