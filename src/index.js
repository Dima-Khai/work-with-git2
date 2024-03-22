const express = require('express')
const productRoutes = require('./product.routes');
const userRouter = require('./user/user.router');
const productRouter = require('./product/product.router');
const bodyParser = require('body-parser');
const {logRequest} = require('./middleware');
const {errorResponder} = require('./error.middleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(logRequest);
app.use(productRouter);
app.use(productRoutes);
app.use(errorResponder);
app.use(userRouter);

app.listen(port,
    () => console.log(`Server start at http://localhost:${port}/`));