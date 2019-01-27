const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();

app.use(postRoutes);

app.use(bodyParser.json());

app.listen(8080);
