document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = [
        { element: document.querySelector('#about'), offset: 500 },
        { element: document.querySelector('#projects'), offset: 1500 },
        { element: document.querySelector('#contact'), offset: 4300 },
        { element: document.querySelector('#button-top'), offset: 200 }
    ];

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        scrollElements.forEach(item => {
            if (scrollPosition > item.offset) {
                item.element.classList.add('visible');
            } else {
                item.element.classList.remove('visible');
            }
        });

        const header = document.querySelector('header');
        if (scrollPosition > 500) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    document.getElementById('button-top').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    window.addEventListener('scroll', debounce(function() {
        // Your scroll-related functions
    }));
});
