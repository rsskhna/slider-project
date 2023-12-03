export {animateSperm}

function animateSperm(spermImg, className) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                spermImg.classList.add(className);
                return;
            }
            spermImg.classList.remove(className);
        });
    });
    observer.observe(document.querySelector('.slide-two__sperm-img'));
}