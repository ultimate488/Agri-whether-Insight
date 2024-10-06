async function fetchWeatherData() {
    try {
        const response = await fetch('https://api.nasa.gov/your-nasa-api-endpoint?api_key=YOUR_API_KEY');
        const data = await response.json();
        
        const temperature = data.main.temp; // Adjust according to actual API structure
        const humidity = data.main.humidity; // Adjust according to actual API structure
        
        document.getElementById('weatherData').innerText = Temperature: ${temperature}°C\nHumidity: ${humidity}%;
    } catch (error) {
        document.getElementById('weatherData').innerText = "Failed to load data.";
    }
}

function checkPestAlerts() {
    const alerts = ["Potential pest infestation detected!", "No current alerts."];
    const alertMessage = alerts[Math.floor(Math.random() * alerts.length)];
    document.getElementById('pestAlerts').innerText = alertMessage;
}

window.onload = function() {
    fetchWeatherData();
    checkPestAlerts();
};