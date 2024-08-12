const express = require('express');
const axios = require('axios');
const path = require('path');
const htmlService = require('./service/htmlService');

const port = 3000;
const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const { city } = req.query;
  const apiKey = 'c2f20e0413ede4f94e4210f5ddc00702';

  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let weather;
  let error = null;

  try {
    if (city) {
      const response = await axios.get(APIUrl);
      weather = response.data;
    }
  } catch (err) {
    error = 'Error, Please try again';
  }

  const html = htmlService.generateHtmlResponse(weather, error);
  res.send(html);
});

app.listen(port, () => {
  console.log('Server is running!');
});
