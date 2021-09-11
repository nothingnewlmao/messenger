const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app
    .use(express.static(__dirname + '/dist'))
    .set('pages', __dirname + '/src/pages')
    .set('view engine', 'html')
    .listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`);
    });
