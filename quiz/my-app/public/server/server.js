const express = require("express");
const app = express();
const api = require('./routes');


app.use('/api', api)

const cors = require('cors');
app.use(cors());

const port = 80;
app.listen(port, ()=> console.log('Listening on por ${port}'))