document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".progress-bar");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const resumeButton = document.querySelector(".resume-button");

    // Animate skill bars smoothly
    skillBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.transition = "width 1.2s ease-in-out";
            bar.style.width = width;
        }, 500);
    });

    // Resume download functionality
    resumeButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Your resume is being prepared for download...");

        setTimeout(() => {
            alert("Download completed! The resume has been saved.");
            const downloadLink = document.createElement("a");
            downloadLink.href = "resume.pdf";
            downloadLink.download = "resume.pdf";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }, 3000);
    });

    // Navigation Button Functionality (Placeholder)
    prevButton.addEventListener("click", () => {
        alert("Navigating to previous section...");
    });

    nextButton.addEventListener("click", () => {
        alert("Navigating to next section...");
    });
});