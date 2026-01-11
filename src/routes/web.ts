import express, { Express } from 'express';
import { getHomePage } from '../controllers/home.controller';
import { getCreateUser, postCreateUser } from '../controllers/user.controller';

const route = express.Router();

const routeWeb = (app: Express) => {
    route.get('/', getHomePage);
    route.get('/create-user', getCreateUser);
    route.post('/handle-create-user', postCreateUser);

    app.use('/', route);
}

export default routeWeb;


