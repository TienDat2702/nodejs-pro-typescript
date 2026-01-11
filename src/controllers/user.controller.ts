import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";

const getCreateUser = (req: Request, res: Response) => {
    return res.render('create-user');
}
const postCreateUser = (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;

    handleCreateUser(fullName, email, address);

    return res.redirect('/');
}

export {
    getCreateUser,
    postCreateUser
}