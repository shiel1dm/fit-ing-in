const express = require('express');
const path = require('path')
const PORT = 3001;
const app = express();
const mongoose = require('mongoose')


app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/exercise.html'))
})


app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/stats.html'))
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })

app.listen(PORT, () => 
console.log(`Live on: http://localhost:${PORT}`))