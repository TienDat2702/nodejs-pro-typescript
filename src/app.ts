import express from 'express';
import 'dotenv/config';
import routeWeb from './routes/web';
import getConnection from './config/database';

const app = express();
const PORT = process.env.PORT || 8080;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static files: image, css, javascript
app.use(express.static('public'));

// config routes
routeWeb(app);

// connection Database
getConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});