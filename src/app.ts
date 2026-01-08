import express from 'express';
import 'dotenv/config';
import routeWeb from './routes/web';

const app = express();
const PORT = process.env.PORT || 8080;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// routes 
routeWeb(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});