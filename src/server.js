const express = require('express');
const cors = require('cors'); // Add this if needed to enable CORS
const getInfo = require('./node_scraper'); // Adjust the path accordingly

const app = express();
const port = 5000; // You can change this to any available port number you prefer

app.use(cors()); // Add this if you're running your React app on a different domain

app.get('/search', async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const scrapedData = await getInfo(); // Call the getInfo() function from node_scraper.js
    const searchData = scrapedData.filter(item => item.title.includes(searchTerm));

    res.json(searchData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Error fetching data.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
