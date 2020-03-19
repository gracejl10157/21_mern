
const express = require('express');
const routes = require("./routes");
const mongoose = require('mongoose');
const app = express();
const portNumber = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if ('production' === process.env.NODE_ENV) {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(portNumber, () =>
  console.log(`The server is now listening to port ${portNumber}.`)
);
