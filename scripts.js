import properties from "./data.js";

// Function to get 3 random properties
function getRandomProperties(arr, num) {
    // Fisher-Yates shuffle algorithm
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, num);
}

// Function to generate property cards dynamically
function displayProperties() {
    const selectedProperties = getRandomProperties(properties, 3);
    const container = document.getElementById("properties-container"); // Update this line

    container.innerHTML = selectedProperties.map(property => `
        <div class="col">
            <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <img src="${property.image}" class="card-img-top img-fluid" alt="${property.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body p-4 d-flex flex-column">
                    <h5 class="card-title fw-bold">${property.title}</h5>
                    <p class="card-text text-muted small">${property.location}</p>
                    <div class="row g-2 mt-3 flex-grow-1">
                        <div class="col-6">
                            <p class="mb-0"><i class="fas fa-home me-1"></i> Type: ${property.type}</p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0"><i class="fas fa-ruler-combined me-1"></i> Area: ${property.squareFeet}</p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0"><i class="fas fa-bed me-1"></i> Bedrooms: ${property.bedrooms}</p>
                        </div>
                        <div class="col-6">
                            <p class="mb-0"><i class="fas fa-bath me-1"></i> Bathrooms: ${property.bathrooms}</p>
                        </div>
                    </div>
                    <p class="card-text text-primary fw-bold mt-3">${property.price}</p>
                    <a href="viewdetails.html?id=${property.id}" class="btn btn-primary w-100 rounded-pill mt-auto">View Details</a>
                </div>
            </div>
        </div>
    `).join('');
}

displayProperties();