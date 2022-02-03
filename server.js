const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/node.html');
});


app.get("/api/test", (req,res) => {
  res.status(201).send('Test Successful').json('Nothing else')
});


// Not found middleware
app.use((req, res, next) => {
  res.status(404).type('text').send('Not Found');
});

// Error Handling middleware
app.use((err, req, res, next) => {
  const { errors, status, message } = err;
  const errCode = errors ? 400 : status || 500;
  const keys = Object.keys(errors);
  const errMessage = errors ? errors[keys[0]].message : message || 'Internal Server Error';
  res.status(errCode).type('txt').send(errMessage);
});

app.listen(6700 || 3000, () => {
  console.log(`Your app is listening on port 6700`);
});