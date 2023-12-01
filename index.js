const express = require('express')
const productRoutes = require('./product.routes');
const {logRequest} = require('./middleware');
const {errorResponder} = require('./error.middleware');

const app = express();
const port = 3000;

app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.listen(port,
    () => console.log(`Server start at http://localhost:${port}/`));