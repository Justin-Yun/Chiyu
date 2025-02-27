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

    // Get modal elements
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close");

    // Get all gallery images
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Track the current image index
    let currentIndex = null;

    // Open modal when an image is clicked
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            currentIndex = index; // Set the current image index
            modal.style.display = "flex"; // Show the modal
            modalImage.src = this.src; // Set modal image to the clicked image
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Hide the modal
    });

    // Close modal when clicking anywhere outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });

    // Listen for keyboard events to navigate images in the modal
    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            // Only work when the modal is open
            if (event.key === "ArrowRight") {
                // Right arrow key
                navigateImage(1); // Show the next image
            } else if (event.key === "ArrowLeft") {
                // Left arrow key
                navigateImage(-1); // Show the previous image
            } else if (event.key === "Escape") {
                // Escape key
                modal.style.display = "none"; // Hide the modal
            }
        }
    });

    // Listen for left-click on the modal image to navigate to the next image
    modalImage.addEventListener("click", function () {
        navigateImage(1); // Navigate to the next image when the modal image is clicked
    });

    // Function to navigate to the next or previous image
    function navigateImage(direction) {
        // Calculate the new index
        currentIndex =
            (currentIndex + direction + galleryItems.length) % galleryItems.length;
        // Set the modal image source to the new image
        modalImage.src = galleryItems[currentIndex].src;
    }
});
