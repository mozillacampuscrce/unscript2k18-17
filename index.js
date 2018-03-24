require('dotenv').config();

const PORT = process.env.PORT;

const express = require('express');
const app = express();

var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/templates');

// required for passport
app.use(session({ secret: '2qwtb4i723tbwruwy38rywiuys' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./src/init')(app);

app.get('/', (req, res) =>
	res.render('index'));

app.use((req, res) => {
	res.end('Fuck off');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
