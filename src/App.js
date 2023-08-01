import logo from './logo.svg';
import './App.css';

//const axios = require('axios/dist/browser/axios.cjs');

import * as cheerio from 'cheerio';

function App() {
  
//const axios = require('axios').default; 
const cheerio = require('cheerio'); 
 
function getInfo(){
  let address = 'https://www.property24.co.ke/property-for-sale-in-nairobi-p95';
  let returnJSON = [];
  
  fetch(address)
    .then(function(response) {
        return response.text();
    })
    .then(function(html) {
        const $ = cheerio.load(html) 
        let $first = $('div.sc_listingTileContent:first').html();
        let $A = cheerio.load($first);
        let firstAnswer = $A('div.sc_listingTileTeaser').text();
        returnJSON.push({first: firstAnswer});
        console.log(returnJSON);
    });
 

  return returnJSON;
}

  getInfo();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
