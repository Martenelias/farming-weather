const generateHtmlHeader = () => {
  const htmlHeader = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" type="text/css" href="/style.css">
    <script src="/index.js" defer></script>
    <title>Farmers Weather</title>
  </head>
  <body>`;
  return htmlHeader;
};

const generateHtmlFooter = () => {
  const htmlFooter = `
  </body>
  </html>`;
  return htmlFooter;
};

const generateHtmlResponse = (weather = null, error = null) => {
  const htmlHeader = generateHtmlHeader();
  const htmlFooter = generateHtmlFooter();
  const iconUrl = 'https://openweathermap.org/img/wn/';
  const iconEndpoint = '@2x.png';

  let weatherContent = '';
  let hourlyWeatherContent = '';

  if (weather && weather.list && weather.list.length > 0) {
    // Extract current weather from the first item in the list
    const currentWeather = weather.list[0];
    const temp = Math.round(currentWeather.main.temp);
    const tempMax = Math.round(currentWeather.main.temp_max);
    const tempMin = Math.round(currentWeather.main.temp_min);

    weatherContent = `
      <div class="today">
        <div class="today-type">
          <div>
            <img src="${iconUrl}${currentWeather.weather[0].icon}${iconEndpoint}" alt="weather icon" />
            <p class="main-temp">${temp}°</p>
          </div>
          <p>${currentWeather.weather[0].description}</p>
        </div>
        <div class="today-detail">
          <p><i class="fa-solid fa-droplet"></i>&nbsp;${currentWeather.main.humidity}%</p>
          <p><i class="fa-solid fa-wind"></i>&nbsp;${currentWeather.wind.speed}&nbsp;m/s</p>
          <p><i class="fa-solid fa-temperature-arrow-up"></i>&nbsp;${tempMax}°C</p>
          <p><i class="fa-solid fa-temperature-arrow-down"></i>&nbsp;${tempMin}°C</p>
        </div>
      </div>`;

    // Generate HTML for the next 5 hours
    for (let i = 1; i <= 5; i += 1) {
      const hourlyWeather = weather.list[i];
      const hourlyTemp = Math.round(hourlyWeather.main.temp);
      hourlyWeatherContent += `
        <div class="hourly-weather">
          <p>${hourlyWeather.dt_txt.split(' ')[1].substring(0, 5)}</p>
          <img src="${iconUrl}${hourlyWeather.weather[0].icon}${iconEndpoint}" alt="weather icon" />
          <p>${hourlyTemp}°</p>
          <p><i class="fa-solid fa-droplet"></i>&nbsp;${hourlyWeather.main.humidity}%</p>
        </div>`;
    }
  } else if (error) {
    weatherContent = `<p class="error">${error}</p>`;
  } else {
    weatherContent = '<p class="error">Weather data is not available. Please try again.</p>';
  }

  const htmlContent = `
    <header>
      <h1>FARM WEATHER</h1>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <section class="showcase">
      <video src="tractor-intro.mp4" muted loop autoplay></video>
      <div class="overlay"></div>
      <div class="intro-text">
        <h2>Weather app for Farmers</h2>
        <p class="intro-text-info">Weather app is made for farmers to keep track on oncoming weather, so they can plan their work.</p>
        <a href="#weather">EXPLORE</a>
      </div>
    </section>
    <section id="weather" class="weather-container">
      <div class="content">
        <form action="/" method="get">
          <input type="text" name="city" placeholder="Enter city name" />
          <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <h2><i class="fas fa-map-marker-alt"></i> ${weather?.city?.name || 'City'}, ${weather?.city?.country || 'Country'}</h2>
        <div class="hour-weather-container">
          <div class="data-container">
            ${weatherContent}
          </div>
          <div class="hour-weather">
            ${hourlyWeatherContent}
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about-container">
      <div class="about-head-box"></div>
      <div class="about-content">
        <h3>About This App</h3>
        <p>Farm Weather is a specialized weather application built with farmers in mind. We understand that accurate and timely weather information is crucial for managing your farm effectively. Whether you're planning to work in the fields, tend to your crops, or handle livestock, our app provides up-to-the-hour weather updates and short-term forecasts. This helps you make the best decisions, ensuring that your day on the farm runs smoothly, no matter the weather.
        </p>
        <p>
        Our mission is to empower farmers with the knowledge they need to maximize productivity and minimize risks. With Farm Weather, you'll always be prepared for whatever Mother Nature has in store.</p>
        <p>All powered by the trusted openweathermap API. This ensures that you receive reliable and precise data.</p>
      </div>
    </section>
    <div class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#weather">Weather</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  `;
  const html = `
    ${htmlHeader}
    ${htmlContent}
    ${htmlFooter}`;
  return html;
};

module.exports = { generateHtmlResponse };
