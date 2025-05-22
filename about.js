document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const colors = ["#ff9a9e", "#fad0c4", "#a18cd1", "#fbc2eb"];
    let index = 0;

    function changeBackground() {
        body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }

    setInterval(changeBackground, 2000); // Change background color every 2 seconds

    // Animate cards when scrolling into view
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});