import { prisma } from "config/clinent";

const initSeedingData = async () => {
    const userCount = await prisma.user.count();
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
    } else {
        console.log(">>>>> DATABASE NOT EMPTY");

    }
}

export default initSeedingData;