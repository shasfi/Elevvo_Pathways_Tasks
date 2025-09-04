// API key integrate ✅
const apiKey = 'ab9da644f55062bd7a484502ca1021f3';

// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherDataDiv = document.getElementById('weatherData');
const loadingDiv = document.getElementById('loading');
const modal = document.getElementById('hourlyModal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const hourlyForecastDiv = document.getElementById('hourlyForecast');
const tabButtons = document.querySelectorAll('.tab-btn');

// Chart instance
let weatherChart = null;
let currentHourlyData = null;
let currentActiveTab = 'temperature';

// Modal event listeners
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  if (weatherChart) {
    weatherChart.destroy();
    weatherChart = null;
  }
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    if (weatherChart) {
      weatherChart.destroy();
      weatherChart = null;
    }
  }
});

// Tab switching
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) return;
    
    // Update active tab
    document.querySelector('.tab-btn.active').classList.remove('active');
    button.classList.add('active');
    currentActiveTab = button.dataset.tab;
    
    // Update chart
    if (currentHourlyData) {
      updateChart(currentHourlyData, currentActiveTab);
    }
  });
});

// Function to show hourly forecast in modal
function showHourlyForecast(forecastData, date, cityName) {
  modalTitle.textContent = `Hourly Forecast for ${cityName} - ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}`;
  
  // Filter hourly data for the selected date
  const selectedDate = date.split(' ')[0];
  const hourlyData = forecastData.list.filter(item => {
    return item.dt_txt.startsWith(selectedDate);
  });
  
  currentHourlyData = {
    data: hourlyData,
    date: date,
    city: cityName
  };
  
  // Display hourly forecast
  displayHourlyForecast(hourlyData);
  
  // Create chart
  updateChart(currentHourlyData, currentActiveTab);
  
  // Show modal
  modal.style.display = 'block';
}

// Function to update chart based on selected tab
function updateChart(hourlyData, dataType) {
  const ctx = document.getElementById('weatherChart').getContext('2d');
  
  // Destroy previous chart if exists
  if (weatherChart) {
    weatherChart.destroy();
  }
  
  const labels = hourlyData.data.map(item => {
    const date = new Date(item.dt * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });
  
  let data = [];
  let label = '';
  let unit = '';
  
  switch(dataType) {
    case 'temperature':
      data = hourlyData.data.map(item => Math.round(item.main.temp));
      label = 'Temperature';
      unit = '°C';
      break;
    case 'humidity':
      data = hourlyData.data.map(item => item.main.humidity);
      label = 'Humidity';
      unit = '%';
      break;
    case 'wind':
      data = hourlyData.data.map(item => (item.wind.speed * 3.6).toFixed(1));
      label = 'Wind Speed';
      unit = ' km/h';
      break;
  }
  
  weatherChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${label} (${unit})`,
        data: data,
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74, 144, 226, 0.1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#4a90e2',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            callback: function(value) {
              return value + (dataType === 'temperature' ? '°C' : dataType === 'humidity' ? '%' : ' km/h');
            }
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleFont: { size: 14 },
          bodyFont: { size: 14 },
          padding: 12,
          callbacks: {
            label: function(context) {
              return `${label}: ${context.parsed.y}${unit}`;
            }
          }
        }
      }
    }
  });
}

// Function to display hourly forecast items
function displayHourlyForecast(hourlyData) {
  hourlyForecastDiv.innerHTML = '';
  
  hourlyData.forEach(hour => {
    const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const temp = Math.round(hour.main.temp);
    const icon = hour.weather[0].icon;
    const description = hour.weather[0].description;
    const humidity = hour.main.humidity;
    const wind = (hour.wind.speed * 3.6).toFixed(1);
    
    const hourElement = document.createElement('div');
    hourElement.className = 'hourly-item';
    hourElement.innerHTML = `
      <div class="hourly-time">${time}</div>
      <div class="hourly-temp">${temp}°C</div>
      <img class="hourly-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
      <div class="hourly-desc">${description}</div>
      <div class="hourly-details">
        <div>💧 ${humidity}%</div>
        <div>💨 ${wind} km/h</div>
      </div>
    `;
    
    hourlyForecastDiv.appendChild(hourElement);
  });
}

// Function to get day name from date
function getDayName(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

// Function to get daily forecast data
function getDailyForecast(forecastList) {
  const dailyForecast = [];
  const days = {};
  
  forecastList.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    if (!days[date]) {
      days[date] = {
        date: date,
        temp: [],
        weather: [],
        icons: [],
        humidity: [],
        windSpeed: []
      };
    }
    days[date].temp.push(item.main.temp);
    days[date].weather.push(item.weather[0].description);
    days[date].icons.push(item.weather[0].icon);
    days[date].humidity.push(item.main.humidity);
    days[date].windSpeed.push(item.wind.speed * 3.6); // Convert to km/h
  });

  // Process each day's data
  for (const date in days) {
    const dayData = days[date];
    const avgTemp = (dayData.temp.reduce((a, b) => a + b, 0) / dayData.temp.length).toFixed(1);
    const avgHumidity = Math.round(dayData.humidity.reduce((a, b) => a + b, 0) / dayData.humidity.length);
    const avgWindSpeed = (dayData.windSpeed.reduce((a, b) => a + b, 0) / dayData.windSpeed.length).toFixed(1);
    
    // Get the most common weather condition for the day
    const weatherCount = {};
    dayData.weather.forEach(w => weatherCount[w] = (weatherCount[w] || 0) + 1);
    const mostCommonWeather = Object.keys(weatherCount).reduce((a, b) => 
      weatherCount[a] > weatherCount[b] ? a : b
    );
    // Get the corresponding icon
    const iconIndex = dayData.weather.findIndex(w => w === mostCommonWeather);
    const icon = dayData.icons[iconIndex];

    dailyForecast.push({
      date: date,
      dayName: getDayName(date),
      temp: avgTemp,
      weather: mostCommonWeather,
      icon: icon,
      humidity: avgHumidity,
      windSpeed: avgWindSpeed
    });
  }

  return dailyForecast.slice(0, 7); // Return next 7 days
}

// Function to fetch weather
async function getWeather(city) {
  try {
    loadingDiv.style.display = 'flex';
    weatherDataDiv.innerHTML = '';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    if (Number(data.cod) !== 200) {
      weatherDataDiv.innerHTML = `<p class="error">City not found! Please try another city.</p>`;
      loadingDiv.style.display = 'none';
      return;
    }

    // Current weather
    const current = data.list[0];
    const currentCard = document.createElement('div');
    currentCard.className = 'current-weather';
    currentCard.innerHTML = `
      <h2>${data.city.name}, ${data.city.country}</h2>
      <div class="current-details">
        <div class="temp">${Math.round(current.main.temp)}°C</div>
        <div class="weather-info">
          <div class="weather-main">${current.weather[0].main}</div>
          <div class="weather-desc">${current.weather[0].description}</div>
          <div class="feels-like">Feels like: ${Math.round(current.main.feels_like)}°C</div>
          <div class="humidity">Humidity: ${current.main.humidity}%</div>
          <div class="wind">Wind: ${(current.wind.speed * 3.6).toFixed(1)} km/h</div>
        </div>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png" alt="${current.weather[0].description}">
      </div>
    `;
    weatherDataDiv.appendChild(currentCard);

    // 7-day forecast
    const forecastTitle = document.createElement('h3');
    forecastTitle.textContent = '7-Day Forecast';
    forecastTitle.className = 'forecast-title';
    weatherDataDiv.appendChild(forecastTitle);

    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'forecast-container';
    
    const dailyForecast = getDailyForecast(data.list);
    
    dailyForecast.forEach((day, index) => {
      const forecastCard = document.createElement('div');
      forecastCard.className = 'forecast-card';
      forecastCard.setAttribute('data-date', day.date);
      forecastCard.setAttribute('tabindex', '0');
      forecastCard.setAttribute('aria-label', `Weather for ${day.dayName}, ${day.date}`);
      forecastCard.innerHTML = `
        <div class="day">${index === 0 ? 'Today' : day.dayName}</div>
        <div class="date">${day.date.split('-').reverse().join('/')}</div>
        <img class="forecast-icon" src="https://openweathermap.org/img/wn/${day.icon}@2x.png" alt="${day.weather}">
        <div class="forecast-temp">${day.temp}°C</div>
        <div class="forecast-desc">${day.weather}</div>
        <div class="forecast-details">
          <span>💧 ${day.humidity}%</span>
          <span>💨 ${day.windSpeed} km/h</span>
        </div>
      `;
      
      // Add click event to show hourly forecast
      forecastCard.addEventListener('click', () => {
        showHourlyForecast(data, day.date, `${data.city.name}, ${data.city.country}`);
      });
      
      // Add keyboard support
      forecastCard.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showHourlyForecast(data, day.date, `${data.city.name}, ${data.city.country}`);
        }
      });
      
      forecastContainer.appendChild(forecastCard);
    });
    
    weatherDataDiv.appendChild(forecastContainer);

    loadingDiv.style.display = 'none';

  } catch (error) {
    weatherDataDiv.innerHTML = `<p>Error fetching data!</p>`;
    loadingDiv.style.display = 'none';
  }
}

// Search button click and Enter key in input
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchWeather();
  }
});

function searchWeather() {
  const city = cityInput.value.trim();
  if (city) {
    // Save to recent searches
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    if (!recentSearches.includes(city)) {
      recentSearches.unshift(city);
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches.slice(0, 5)));
    }
    
    getWeather(city);
    // Hide keyboard on mobile after search
    cityInput.blur();
  }
}

// Get current location weather
window.addEventListener('load', () => {
  // Check for saved city in localStorage
  const savedCity = localStorage.getItem('lastSearchedCity');
  if (savedCity) {
    cityInput.value = savedCity;
    getWeather(savedCity);
  } else if (navigator.geolocation) {
    // Try to get location if no saved city
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          loadingDiv.style.display = 'flex';
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          );
          const data = await response.json();
          
          // Use the city name from the API to get full forecast
          if (data.name) {
            cityInput.value = data.name;
            getWeather(data.name);
          }
        } catch (err) {
          console.log('Location weather fetch error:', err);
          loadingDiv.style.display = 'none';
        }
      },
      (error) => {
        console.log('Geolocation error:', error);
        // If geolocation fails, show default city
        cityInput.value = 'London';
        getWeather('London');
      }
    );
  }
});