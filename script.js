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

    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close-lightbox");

    document.querySelectorAll(".gallery-image").forEach((img) => {
        img.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightbox.classList.remove("hidden");
        });
    });

    function closeLightbox() {
        lightbox.classList.add("hidden");
    }

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
        if (event.target !== lightboxImg) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeLightbox();
    });
});
