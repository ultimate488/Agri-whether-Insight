// app.js - Eco Visionaries - Smart Agriculture Tool

let weatherData = []; // Store weather data

// Function to handle form submission
document.getElementById("weather-data-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const date = document.getElementById("date").value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    const humidity = parseFloat(document.getElementById("humidity").value);
    const precipitation = parseFloat(document.getElementById("precipitation").value);

    // Store data in an object
    const weatherEntry = { date, temperature, humidity, precipitation };
    weatherData.push(weatherEntry); // Add entry to weather data array

    // Reset form
    document.getElementById("weather-data-form").reset();
    alert('Weather data submitted successfully!'); // Success message
});

// Function to display weather data (could be improved further with charts)
function displayWeatherData() {
    const weatherContainer = document.createElement('div');
    weatherContainer.className = 'weather-data-container';
    
    weatherData.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'weather-entry';
        entryDiv.innerHTML = `
            <p><strong>Date:</strong> ${entry.date}</p>
            <p><strong>Temperature:</strong> ${entry.temperature}°C</p>
            <p><strong>Humidity:</strong> ${entry.humidity}%</p>
            <p><strong>Precipitation:</strong> ${entry.precipitation}mm</p>
            <hr>
        `;
        weatherContainer.appendChild(entryDiv);
    });

    document.body.appendChild(weatherContainer); // Append to body or a specific section
}