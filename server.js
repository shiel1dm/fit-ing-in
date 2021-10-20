const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')
const router = require('./controllers')


app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));

app.use(router)

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => 
console.log(`Live on: http://localhost:${PORT}`))