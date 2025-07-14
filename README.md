# 🅿️ Smart Parking App

This is a web-based **Smart Parking App** that helps users find nearby parking spots using their current location. It also displays the user's network status and simulates background updates.

## 🔧 Built With
- **HTML, CSS, JavaScript**
- **Geolocation API**
- **Network Information API**
- **Background Tasks Simulation (setInterval)**

---

## 🚀 Features

### ✅ 1. Geolocation API
- Detects the user's current **latitude and longitude**.
- Displays user's location and simulates **nearby parking spots**.

### ✅ 2. Network Information API
- Detects the **internet connection type** (e.g., 4g, wifi).
- Displays it at the top of the app.

### ✅ 3. Background Tasks (Simulated)
- Uses `setInterval` to simulate **background updates** every 5 seconds.
- Logs a message in the console to mimic real-time data updates.

---

## 🗂️ Project Structure

```
smart_parking_app/
├── index.html      # Main UI
├── styles.css      # Styling
├── script.js       # API logic and interaction
└── README.md       # Project explanation
```

---

## 📦 How to Run

1. **Extract** the downloaded ZIP file.
2. Open the folder `smart_parking_app`.
3. Double-click on `index.html` to launch the app in your browser.
4. Allow location access when prompted.

---

## 💡 Sample Output

- **Network Type**: 4g  
- **Location**: Lat 12.971, Lng 77.594  
- **Nearby Parking Spots**:  
  - Central Mall Parking - 0.5 km  
  - City Center Basement - 0.8 km  
  - Public Parking Lot A - 1.2 km  

---

## 📌 Notes

- This is a demo project using simulated data.
- For production, you can integrate it with real maps and parking availability APIs like Google Maps or Park+.

---

## 👤 Author

**Ankitha Devaraja**  
Built with the help of ChatGPT 💡