const propertyForm = document.getElementById('propertyForm');
const propertyList = document.getElementById('propertyList');

// Fetch properties on page load
document.addEventListener('DOMContentLoaded', fetchProperties);

// Function to fetch properties from the backend
async function fetchProperties() {
    const response = await fetch('/api/properties'); // Update with your actual API endpoint
    const properties = await response.json();
    displayProperties(properties);
}

// Function to display properties
function displayProperties(properties) {
    propertyList.innerHTML = '';
    properties.forEach(property => {
        const propertyItem = document.createElement('div');
        propertyItem.className = 'property-item';
        propertyItem.innerHTML = `
            <strong>Address:</strong> ${property.address}<br>
            <strong>Price:</strong> $${property.price}<br>
            <strong>Size:</strong> ${property.size} sq ft<br>
            <strong>Description:</strong> ${property.description}<br>
            <button onclick="editProperty(${property.id})">Edit</button>
            <button onclick="deleteProperty(${property.id})">Delete</button>
        `;
        propertyList.appendChild(propertyItem);
    });
}

// Handle form submission
propertyForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const newProperty = {
        address: document.getElementById('address').value,
        price: parseFloat(document.getElementById('price').value),
        size: parseFloat(document.getElementById('size').value),
        description: document.getElementById('description').value,
    };

    await fetch('/api/properties', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProperty),
    });

    propertyForm.reset();
    fetchProperties(); // Refresh the property list
});

// Edit property function (to be implemented)
function editProperty(id) {
    // Implement the logic to edit a property
}

// Delete property function
async function deleteProperty(id) {
    await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
    });
    fetchProperties(); // Refresh the property list
}
