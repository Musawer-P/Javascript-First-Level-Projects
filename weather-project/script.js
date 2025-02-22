 // Hardcoded weather data for New York
 const weatherData = {
    city: 'New York',
    temperature: '20°C',
    condition: 'Clear Sky',
    wind: '10 km/h',
    humidity: '60%',
    pressure: '1015 hPa'
  };

  // Display the weather data on the page
  document.getElementById('city-name').textContent = weatherData.city;
  document.getElementById('temperature').textContent = weatherData.temperature;
  document.getElementById('condition').textContent = weatherData.condition;
  document.getElementById('wind').textContent = weatherData.wind;
  document.getElementById('humidity').textContent = weatherData.humidity;
  document.getElementById('pressure').textContent = weatherData.pressure;
