// Function to render properties
function renderProperties(filteredProperties) {
    const container = document.getElementById("property-list");
    container.innerHTML = ""; // Clear previous results

    if (filteredProperties.length === 0) {
        container.innerHTML = `<p class="text-center">No properties found.</p>`;
        return;
    }

    filteredProperties.forEach((property) => {
        const card = `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                    <img src="${property.image}" class="card-img-top img-fluid" alt="${property.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body p-4 d-flex flex-column">
                        <h5 class="card-title fw-bold">${property.title}</h5>
                        <p class="card-text text-muted small">${property.location}</p>
                        <p class="card-text text-primary fw-bold mt-3">$${property.price.toLocaleString()}</p>
                        <a href="viewdetails.html?id=${property.id}" class="btn btn-primary w-100 rounded-pill mt-auto">View Details</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Initial rendering of all properties
renderProperties(properties);

// Add event listener to the form
document.getElementById("property-filter-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get filter values
    const location = document.getElementById("location").value.trim().toLowerCase();
    const propertyType = document.getElementById("property-type").value;
    const priceRange = document.getElementById("price-range").value;

    // Filter properties
    const filteredProperties = properties.filter((property) => {
        const matchesLocation = property.location.toLowerCase().includes(location);
        const matchesType = propertyType ? property.type === propertyType : true;
        const matchesPrice =
            priceRange === ""
                ? true
                : priceRange === "100000-2000000"
                    ? property.price >= 100000 && property.price <= 2000000
                    : priceRange === "2000000-3000000"
                        ? property.price > 2000000 && property.price <= 3000000
                        : priceRange === "3000000+"
                            ? property.price > 3000000
                            : false;

        return matchesLocation && matchesType && matchesPrice;
    });

    // Render filtered properties
    renderProperties(filteredProperties);
});