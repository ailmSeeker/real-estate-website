const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 5000; // You can change this to any available port number you prefer

app.get('/', async (req, res) => {
  const url = 'https://www.property24.co.ke/property-for-sale-in-nairobi-p95';
  let info = [];

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    $('.sc_panel.js_listingTile').each(function () {
      let flashCardHTML = $(this).find('div.pull-left').html();
      let loadFlash = cheerio.load(flashCardHTML);

      let titleGetter = loadFlash('div.sc_listingTileArea');
      let priceGetter = loadFlash('div.sc_listingTilePrice span');
      let locationGettere = loadFlash('div.sc_listingTileAddress');
      let description = loadFlash('div.sc_listingTileTeaser');

      let title = titleGetter.text();

      info.push({
        'title': title,
        'price': priceGetter.text(),
        'location': locationGettere.text(),
        'description': description.text()
      });
    });

    console.log(info);
    res.json(info); // Sending the result as JSON to the browser
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Error fetching data.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
