// Importing Express
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use('/user', UserRouter);
app.use('/brand', BrandRouter);
app.use('/cars', CarRouter);
app.use('/category', CategoryRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});