const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');

const app = express();
const port = 8081;
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/status', (req, res) => {
  res.send({ message: "HELLO!!!" });
})



app.listen(process.env.PORT || port, () => { console.log(`server listening on port ${port}`.blue) });