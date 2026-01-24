import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constant";
import bcrypt from 'bcrypt';

const saltRounds = 10;

const hashPassword = async (plainText: string) => {
    return await bcrypt.hash(plainText, saltRounds);
}

const getAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}
const getAllRole = async () => {
    const roles = await prisma.role.findMany();
    return roles;
}

const handleCreateUser = async (
    name: string,
    username: string,
    address: string,
    phone: string,
    avatar: string,
) => {
    const defaultPassword = await hashPassword('123456')
    const newUser = await prisma.user.create({
        data: {
            fullName: name,
            username: username,
            address: address,
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            phone: phone,
            avatar: avatar,
        }
    })
    return newUser;
};

const handleDeleteUser = async (id: string) => {
    const user = await prisma.user.delete({
        where: {
            id: +id,
        },
    })
    return user;
}
const updateUserById = async (id: string, name: string, email: string, address: string) => {
    const user = await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            fullName: name,
            username: email,
            address: address,
            password: '',
            accountType: ''
        }
    })
}

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id,
        },
    })
    return user;
}


export {
    handleCreateUser,
    handleDeleteUser,
    getUserById,
    updateUserById,
    getAllUser,
    getAllRole,
    hashPassword
}