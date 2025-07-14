// Check network info
const statusDiv = document.getElementById('status');
if ('connection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    statusDiv.textContent = `Network Type: ${connection.effectiveType}`;
} else {
    statusDiv.textContent = "Network info not supported";
}

// Geolocation to get current position
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        document.getElementById('map').textContent = `Your Location: Lat ${latitude.toFixed(3)}, Lng ${longitude.toFixed(3)}`;

        // Simulate nearby parking spots
        const parkingSpots = [
            { name: "Central Mall Parking", distance: "0.5 km" },
            { name: "City Center Basement", distance: "0.8 km" },
            { name: "Public Parking Lot A", distance: "1.2 km" }
        ];

        const list = document.getElementById('parking-list');
        list.innerHTML = "<h3>Nearby Parking Spots:</h3>";
        parkingSpots.forEach(spot => {
            const div = document.createElement('div');
            div.textContent = `${spot.name} - ${spot.distance}`;
            list.appendChild(div);
        });

    }, () => {
        document.getElementById('map').textContent = "Unable to retrieve location";
    });
} else {
    document.getElementById('map').textContent = "Geolocation not supported";
}

// Background Task simulation (logs every 5 seconds)
setInterval(() => {
    console.log("Background check: Parking data updated.");
}, 5000);