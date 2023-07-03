require('./db')
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const router = require('./src/routes/index');
const { PORT } = process.env;
const cors = require('cors');
const passport = require('passport');

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', router);



app.listen(PORT, () => {
    console.log('%s listening at', "server", PORT); 
  });
