const axios = require('axios'); 
const cheerio = require('cheerio');
const url = 'https://www.property24.co.ke/property-for-sale-in-nairobi-p95';
const { det, opts, version, Opts, Res } = require("detergent");

function getInfo(){
  let info = []; 
  
  let returny = await axios.get(url)  
  .then(({ data }) => {  
    const $ = cheerio.load(data); 
   
   $('.sc_panel.js_listingTile').each(function(){
     let flashCardHTML = $(this).find('div.pull-left').html();   
     let loadFlash = cheerio.load(flashCardHTML);
     //image gets the title
     let titleGetter = loadFlash('div.sc_listingTileArea');
     let priceGetter = loadFlash('div.sc_listingTilePrice span'); 
     let locationGettere = loadFlash('div.sc_listingTileAddress');
     let description = loadFlash('div.sc_listingTileTeaser');
     
     let title = titleGetter.text();


     info.push({'title': det(title).res, 'price': det(priceGetter.text()).res, 'location': det(locationGettere.text()).res, 'description': det(description.text()).res});
     console.log(info);
   });
  
     return info;
   });
  
}

getInfo();
