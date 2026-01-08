import express, { Express } from 'express';

const route = express.Router();

const routeWeb = (app: Express) => {
    route.get('/', (req, res) => {
        return res.render('home');
    });
    route.get('/demo', (req, res) => {
        return res.send('Hello World from Express demo!');
    });
    route.get('/demo2', (req, res) => {
        return res.send('Hello World from Express demo2!');
    });

    app.use('/', route);
}

export default routeWeb;


