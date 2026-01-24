import { prisma } from "config/clinent";

const initSeedingData = async () => {
    const userCount = await prisma.user.count();
    const userRole = await prisma.role.count();
    if (userCount === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: 'user@gmail.com',
                    password: '123456',
                    accountType: 'USER'
                },
                {
                    username: 'admin@gmail.com',
                    password: '123456',
                    accountType: 'ADMIN'
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