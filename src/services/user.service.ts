import { prisma } from "config/clinent";
import getConnection from "config/database";

const getAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const handleCreateUser = async (name: string, email: string, address: string) => {
    const newUser = await prisma.user.create({
        data: {
            fullName: name,
            username: email,
            address: address,
            password: '',
            accountType: '',
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
}