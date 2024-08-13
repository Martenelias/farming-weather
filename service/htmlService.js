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

  const temp = Math.round(weather.main.temp);
  const tempMax = Math.round(weather.main.temp_max);
  const tempMin = Math.round(weather.main.temp_min);

  const weatherContent = weather
    ? `
      <div class="today">
        <div class="today-type">
          <img src="${iconUrl}${weather.weather[0].icon}${iconEndpoint}" alt="weather icon" />
          <p><i class="fa-solid fa-droplet"></i>&nbsp;${weather.main.humidity}%</p>
          <p><i class="fa-solid fa-wind"></i>&nbsp;${weather.wind.speed}</p>
        </div>
        <div class="today-type">
          <p class="main-temp">${temp}°C</p>
          <p><i class="fa-solid fa-temperature-arrow-up"></i>&nbsp;${tempMax}°C</p>
          <p><i class="fa-solid fa-temperature-arrow-down"></i>&nbsp;${tempMin}°C</p>
        </div>
      </div>`
    : '';

  const errorContent = error ? `<p class="error">${error}</p>` : '';

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
    <section class="weather-container">
      <div class="content">
        <form action="/" method="get">
          <input type="text" name="city" placeholder="Enter city name" />
          <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <h2><i class="fas fa-map-marker-alt"></i> ${weather.name}, ${weather.sys.country}</h2>
        <div class="data-container">
          ${errorContent}
          ${weatherContent}
        </div>
      </div>
    </section>
    <div class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Weather</a></li>
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
