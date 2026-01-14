import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    return res.render('home', {
        users: users
    });
}
const getCreateUser = (req: Request, res: Response) => {
    return res.render('create-user');
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;

    await handleCreateUser(fullName, email, address);

    return res.redirect('/');
}

export {
    getCreateUser,
    postCreateUser,
    getHomePage,
}