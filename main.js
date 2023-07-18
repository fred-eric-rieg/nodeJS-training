const express = require('express');
const { readFile } = require("fs");

const app = express();

// Set up endpoint
app.get('/', (request, response) => {

    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send("Sorry, out of order.");
        }
        response.send(html);
    });
});

app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));