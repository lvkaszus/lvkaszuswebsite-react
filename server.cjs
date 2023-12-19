const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const distPath = path.join(__dirname, 'dist');


const port = '8080';


app.use(compression());

app.use(express.static(distPath));

app.listen(port, () => {
  console.log(`[lvkaszusWebsite-React]   Express Server is running on port ${port}!`);
});