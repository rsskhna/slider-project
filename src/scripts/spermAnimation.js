export {animateSperm}

function animateSperm(sperm) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sperm.classList.add('slide-two__sperm-animation');
                return;
            }
            sperm.classList.remove('slide-two__sperm-animation');
        });
    });
    observer.observe(document.querySelector('.slide-two__sperm-img'));
}