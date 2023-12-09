const express = require('express')
const app = express()
const cors=require('cors')
const db = require('./dbconnection')
const router = require('./routes')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(`${__dirname}/upload`));

app.use('/',router)
app.listen(3005);
