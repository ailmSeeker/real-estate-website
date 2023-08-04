import * as cheerio from 'cheerio';
import { det } from "detergent";
import axios from "axios";
import {useState, useEffect} from 'react';

function GetInfo(){

  const url = 'https://www.property24.co.ke/property-for-sale-in-nairobi-p95';


  let info = [];
  //const [Data, setData] = useState([]);
  
 
  useEffect(() => {
  axios.get(url)
   .then(({ data }) => {  
    const $ = cheerio.load(data); 

     $('.sc_panel.js_listingTile').each(function(){
       let flashCardHTML = $(this).find('div.pull-left').html();   
       let loadFlash = cheerio.load(flashCardHTML);

       let titleGetter = loadFlash('div.sc_listingTileArea');
       let priceGetter = loadFlash('div.sc_listingTilePrice span'); 
       let locationGettere = loadFlash('div.sc_listingTileAddress');
       let description = loadFlash('div.sc_listingTileTeaser');
       
       let title = titleGetter.text();



       let z = {'title': det(title).res, 'price': det(priceGetter.text()).res, 'location': det(locationGettere.text()).res, 'description': det(description.text()).res};

       info.push(z)
       //setData(current => [...current, z]);
       console.log(info);
    });

   });

  });
}


export default GetInfo;
