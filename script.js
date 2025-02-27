document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for h1
    const text = document.querySelector("h1");
    if (text) {
        text.style.opacity = "0";
        setTimeout(() => {
            text.style.transition = "opacity 2s";
            text.style.opacity = "1";
        }, 500);
    }
});
