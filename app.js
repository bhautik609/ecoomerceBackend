const express = require('express')
const app = express()
const port = 5000
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
require('./dbconnection');
const router=require('./router/router')
app.use(cookieParser());
app.use(router);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})