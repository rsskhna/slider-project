export {animateDaisy}

function animateDaisy(daisyImg, className) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                daisyImg.classList.add(className);
                return;
            }
            daisyImg.classList.remove(className);
        });
    });
    observer.observe(document.querySelector('.slide-two__daisy-img'));
}