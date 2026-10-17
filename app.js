// Smooth scrolling for navigation links (ONLY for same-page # links)
document.querySelectorAll('header ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // If it's an external .html page, do NOT prevent default
        if (href.includes('.html')) {
            return; // Let browser navigate normally
        }
        
        // Only handle same-page anchor links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll down button (only if exists)
const scrollBtn = document.querySelector('.scroll-down');
if (scrollBtn) {
    scrollBtn.addEventListener('click', function() {
        const infoSection = document.querySelector('.info-section');
        if (infoSection) {
            window.scrollTo({
                top: infoSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
}