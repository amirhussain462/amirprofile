console.log("Header script loaded");
// Load the header dynamically and apply styles based on the page
document.addEventListener("DOMContentLoaded", () => {
    // Fetch JSON data for the header
    fetch("header.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Header JSON fetched successfully:", data); // Debug log
        // Insert logic to dynamically update the header
        const headerContainer = document.querySelector("#header");
        if (headerContainer) {
            headerContainer.style.backgroundImage = `url(${data.header.bgImages.home})`;
            headerContainer.innerHTML = `
                <div class="header-overlay"></div>
                <div class="header-content">
                    <h1>${data.header.title}</h1>
                    <p>${data.header.tagline}</p>
                </div>`;
        }
    })
    .catch((error) => {
        console.error("Error loading header JSON:", error);
    });
});
