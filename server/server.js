const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { application } = require('express');

//Loading in the express functions
const app = express();
const port = process.env.PORT || 3000;

//Define path for express configs
const serverDirectoryPath = path.join(__dirname, '..');
const viewsPath = path.join(__dirname, '../views');

//Setup handlers and Express config
app.set('views', viewsPath);
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
hbs.registerPartials(viewsPath);

//Setup static directory to server
app.use(express.static(serverDirectoryPath));

app.get('', (req, res) => {
	res.render('index', {});
});

app.listen(port, () => console.log('Server is up and running.....'));
