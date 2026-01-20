import express, { Express } from 'express';
import { getCreateUser, postCreateUser, getHomePage, postDeleteUser, getViewUser, postUpdateUser } from 'controllers/user.controller';

const route = express.Router();

const routeWeb = (app: Express) => {
    route.get('/', getHomePage);
    route.get('/create-user', getCreateUser);
    route.post('/handle-create-user', postCreateUser);
    route.post('/handle-delete-user/:id', postDeleteUser);
    route.get('/handle-view-user/:id', getViewUser);
    route.post('/handle-update-user/:id', postUpdateUser);

    app.use('/', route);
}

export default routeWeb;


