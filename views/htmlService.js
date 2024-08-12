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

const generateHtmlResponse = () => {
  const htmlHeader = generateHtmlHeader();
  const htmlFooter = generateHtmlFooter();
  const htmlContent = `
    <section class="showcase">
      <header>
      <h1>FARM WEATHER</h1>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      </header>
      <video src="tractor-intro.mp4" muted loop autoplay></video>
      <div class="overlay"></div>
      <div class="intro-text">
        <h2>Weather app for Farmers</h2>
        <p class="intro-text-info">Weather app is made for farmers to keep track on oncoming weather, so they can plan their work.</p>
        <a href="#weather">EXPLORE</a>
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
