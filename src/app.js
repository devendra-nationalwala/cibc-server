const express = require('express')
const routes = require('./routes/v1');
const app = express()
const mongoose = require("mongoose");
// mongoose.set('debug', true); uncomment this line to view mongoose queries.
const mongoDB = "mongodb://root:cibc@localhost:27017/cibc?authSource=admin&authMechanism=DEFAULT";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const port = 3000
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.get('/', (req, res) => {
  res.send('Hello CIBC!')
})


app.use('/v1', routes);

app.listen(port, () => {
  console.log(`CIBC server app listening on port ${port}`)
})