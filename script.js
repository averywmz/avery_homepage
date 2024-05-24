document.addEventListener('click', function(event) {
    const targetElement = document.getElementById('targetElement');
    const isClickInside = targetElement.contains(event.target);

    if (!isClickInside) {
        targetElement.style.display = 'none';
    }
});
