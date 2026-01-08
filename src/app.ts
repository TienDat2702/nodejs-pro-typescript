import express from 'express';
import 'dotenv/config';
import { time } from 'console';

const app = express();
const PORT = process.env.PORT || 8080;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    return res.render('home');
});
app.get('/demo', (req, res) => {
    return res.send('Hello World from Express demo!');
});
app.get('/demo2', (req, res) => {
    return res.send('Hello World from Express demo2!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});