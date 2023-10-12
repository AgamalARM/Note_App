// setup server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('server on root route');
})


var port = 3000;
app.listen(port, () => {
    console.log(`server start on port ${port}`)
  });