const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const app = express()
app.use(bodyParser.json()); 
app.use('/', routes)

mongoose
  .connect(
    'mongodb+srv://ypaopash:root@cluster0.bzimmkk.mongodb.net/student?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(8080,() => {console.log("connected 8080");} );
  })
  .catch(err => console.log(err));