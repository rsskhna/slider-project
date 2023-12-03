export {resetPositions}

function resetPositions(scrollbar, text) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollbar.value = 0;
                text.scrollTop = 0;
            }
        });
    });
    observer.observe(document.querySelector('.slide-two__text-area'));
}