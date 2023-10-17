const apiKey = 'AIzaSyCiw0ndY97os3lqyebN5oxcDF6MvZ14vHQ';

// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Defalt
        zoom: 12,
    });

    // Add marker for current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            const userMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Your Location'
            });
            map.setCenter(userLocation);
        });
    }
}

// Search for a location
function searchLocation() {
    const query = document.getElementById('search-input').value;
    // Use Google Maps Geocoding API to convert query to coordinates
    // Display the result on the map
}

// Get directions
function getDirections() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    // Use Google Maps Directions API to get directions and display on the map
}

// Save a place to favorites
function saveFavoritePlace() {
    const place = document.getElementById('search-input').value;
    const favoriteList = document.getElementById('favorite-list');
    const li = document.createElement('li');
    li.textContent = place;
    favoriteList.appendChild(li);
}

// Event listeners
document.getElementById('search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchLocation();
    }
});
document.getElementById('from').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        getDirections();
    }
});
document.getElementById('to').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        getDirections();
    }
});