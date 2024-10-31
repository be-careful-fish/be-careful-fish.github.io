// Detect browser and device info
const browserInfo = navigator.userAgent;
const deviceType = /Mobile|Android|iP(hone|ad)/.test(navigator.userAgent) ? "Mobile" : "Desktop";

// Display the information on the page
document.getElementById('browser-info').textContent = browserInfo;
document.getElementById('device-info').textContent = deviceType;

// Fetch IP address using a simple IP API (for demonstration)
fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').textContent = data.ip;
    })
    .catch(error => {
        document.getElementById('ip-address').textContent = "Unavailable";
    });

// Placeholder location (since real geolocation needs user permission)
document.getElementById('location').textContent = "Somewhere on Earth 🌎";
