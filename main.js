
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenu = document.getElementById('close-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Back to top button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate progress bars on scroll
        const animateProgressBars = () => {
            const progressBars = document.querySelectorAll('.progress-value');
            const skillsSection = document.getElementById('skills');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        progressBars.forEach(bar => {
                            const value = bar.getAttribute('data-value');
                            bar.style.width = `${value}%`;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(skillsSection);
        };
        
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Form submission (simulated)
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
        }
        
        // Initialize animations on load
        window.addEventListener('DOMContentLoaded', () => {
            animateProgressBars();
        });

const viewBtn = document.querySelector(".view-btn"); // single button
const hiPro = document.querySelector(".h-pro"); // single hidden card
const hiPr2o = document.querySelector(".h-pr2o");

viewBtn.addEventListener("click", () => {
    hiPro.classList.remove("hidden");
    hiPr2o.classList.remove("hidden");
});

