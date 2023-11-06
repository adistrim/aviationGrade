document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const currentPageSpan = document.getElementById("currentPage");

    const cardsPerPage = 10; // Number of cards per page
    let currentPage = 1;

    // Function to show/hide cards based on the current page
    function updatePagination() {
        const start = (currentPage - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        currentPageSpan.textContent = `Page ${currentPage}`;

        // // Update button visibility
        // if (currentPage === 1) {
        //     prevPageButton.style.display = "none"; // Hide "Previous Page" on page 1
        // } else {
        //     prevPageButton.style.display = "inline-block"; // Show "Previous Page"
        // }

        // if (currentPage === Math.ceil(cards.length / cardsPerPage)) {
        //     nextPageButton.style.display = "none"; // Hide "Next Page" on the last page
        // } else {
        //     nextPageButton.style.display = "inline-block"; // Show "Next Page"
        // }
    }

    // Event listener for the "Next Page" button
    nextPageButton.addEventListener("click", function () {
        if (currentPage < Math.ceil(cards.length / cardsPerPage)) {
            currentPage++;
            updatePagination();
        }
    });

    // Event listener for the "Previous Page" button
    prevPageButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    // Initial update of pagination
    updatePagination();
});
