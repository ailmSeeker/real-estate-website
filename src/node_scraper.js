const axios = require('axios');
const cheerio = require('cheerio');
const { det } = require("detergent");

const url = 'https://www.property24.co.ke/property-for-sale-in-nairobi-p95';

async function getInfo() {
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
        'title': det(title).res,
        'price': det(priceGetter.text()).res,
        'location': det(locationGettere.text()).res,
        'description': det(description.text()).res
      });
    });
    console.log(info);
    return info;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
}

module.exports = getInfo;
