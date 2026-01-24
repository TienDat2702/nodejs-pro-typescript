import { prisma } from "config/client";
import { hashPassword } from "services/user.service";
import { ACCOUNT_TYPE } from "config/constant";

const initSeedingData = async () => {
    const userCount = await prisma.user.count();
    const userRole = await prisma.role.count();
    if (userCount === 0) {
        const defaultPassword = await hashPassword('123456')
        await prisma.user.createMany({
            data: [
                {
                    fullName: 'Tran Tien Dat',
                    username: 'user@gmail.com',
                    password: defaultPassword,
                    accountType: ACCOUNT_TYPE.SYSTEM,
                    avatar: 'avatar'
                },
                {
                    fullName: 'admin',
                    username: 'admin@gmail.com',
                    password: defaultPassword,
                    accountType: ACCOUNT_TYPE.SYSTEM,
                    avatar: 'avatar'
                },
            ]

        })
    }
    if (userRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: 'ADMIN',
                    description: 'Admin được cấp full quyền'
                },
                {
                    name: 'USER',
                    description: 'User bị hạn chế chức năng '
                },
            ]

        })
    }
    else {
        console.log(">>>>> DATABASE NOT EMPTY");

    }
}

export default initSeedingData;