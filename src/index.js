var path = require('path');
const express = require('express');
// const morgan = require('morgan');

var session = require('express-session');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 4200;


const route = require('./routes');

// const db = require('./config/db').default
// // Connect to DB
// db.connect();

app.use(express.static(path.join(__dirname, 'public'))); // set up flie tĩnh


app.use(express.urlencoded({ extended: true }));      // middleware xử lý dữ liệu từ submit form
app.use(express.json());
app.use(session({
  secret: 'abcdefg',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
// app.use(morgan('combined'));

// Template engine
// app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
// app.set('views', path.join(__dirname, 'resources/views')); // set up view
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

app.set('views', path.join(__dirname, 'resources/views'));


// Routes init
route(app);

var http = require('http');

// Setting up PORT


// Creating http Server
var httpServer = http.createServer(
  function (req, response) {

    // Setting up Headers
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.end('ok');
  })


app.listen(port, () => {
  console.log(`Ứng dụng đang chạy với port ${port}`)

})



