/*

    lvkaszusWebsite-React --- version: 4.2
    
        Express Server Configuration

       For serving website static files

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const port = 8080;

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(port, () => {
  console.log(`[lvkaszusWebsite-React]   Express Server is running on port ${port}!`);
});