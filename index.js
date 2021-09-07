const express = require('express');
const app = express();

app.get('/', function(req, res) {

    res.send('<h3>Hello Node on Heroku</h3><p><a href="https://github.com/TrevorShelton25/hello-heroku">GitHub</a></p>');

});

app.get('/about', function(req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.listen(process.env.PORT || 3000);
