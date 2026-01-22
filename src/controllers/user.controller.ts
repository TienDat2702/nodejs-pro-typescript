import { Request, Response } from "express";
import { getAllUser, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    return res.render('home', {
        users: users
    });
}
const getCreateUser = (req: Request, res: Response) => {
    return res.render('admin/user/create');
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;

    await handleCreateUser(fullName, email, address);

    return res.redirect('/admin');
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect('/')
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    console.log(user);

    return res.render('view-user', {
        user: user
    })
}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fullName, email, address } = req.body;
    await updateUserById(id, fullName, email, address);

    return res.redirect('/')
}

export {
    getCreateUser,
    postCreateUser,
    getHomePage,
    postDeleteUser,
    postUpdateUser,
    getViewUser
}