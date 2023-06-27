const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001

const db = require("./db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/reportMissing', (req, res) => {
  let data = req.body;
  console.log(data)
  res.sendStatus(200);
})

app.get('/reports', (req, res) => {
  res.send('Sending the pending missing printer reports')
});

app.post('/newPrinter', (req, res) => {
  let data = req.body;
  const make = data.printer.make;
  const model = data.printer.model;
  const ink = data.ink;

  // Add ink to db if not exists
  db.addInk();

  // Add printer to db, and a link to with it's ink
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})