// Load the header dynamically and apply styles based on the page
document.addEventListener("DOMContentLoaded", () => {
    // Fetch JSON data for the header
    fetch("header.json")
        .then((response) => response.json())
        .then((data) => {
            const headerContainer = document.getElementById("header-container");
            const currentPath = window.location.pathname.split("/").pop();
            const bgImages = data.header.bgImages;

            // Inject header HTML content
            headerContainer.innerHTML = `
                <header id="header" style="background-image: url('${bgImages[currentPath.split(".")[0]] || bgImages.home}');">
                    <div class="header-overlay"></div>
                    <div class="header-content">
                        <h1>${data.header.title}</h1>
                        <p>${data.header.tagline}</p>
                    </div>
                </header>
            `;
        })
        .catch((error) => {
            console.error("Error loading header JSON:", error);
        });
});
