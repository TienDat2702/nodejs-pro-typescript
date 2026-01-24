import { Request, Response } from "express";
import { getAllRole, getAllUser, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    return res.render('home', {
        users: users
    });
}
const getCreateUser = async (req: Request, res: Response) => {
    const roles = await getAllRole();
    return res.render('admin/user/create', { roles });
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, username, address, phone, role } = req.body;

    const file = req.file;
    const avatar = file?.filename ?? 'avatar';

    await handleCreateUser(fullName, username, address, phone, avatar);

    return res.redirect('/admin/user');
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