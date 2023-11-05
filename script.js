document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();

        // Perform a search with the searchTerm (you would typically send this to the backend).
        // For this example, we'll just show an alert with the search term.
        alert(`You searched for: ${searchTerm}`);
    });

    // Optionally, listen for the "Enter" key press in the input field.
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            searchButton.click(); // Trigger the search button click event.
        }
    });
});