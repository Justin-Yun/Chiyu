document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector("h1");
    text.style.opacity = "0";
    setTimeout(() => {
        text.style.transition = "opacity 2s";
        text.style.opacity = "1";
    }, 500);
});
