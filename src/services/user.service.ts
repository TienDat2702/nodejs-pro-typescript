import { log } from "console";
import getConnection from "../config/database";

const handleCreateUser = (fullName: string, email: string, address: string) => {
    log(">>>> check data from service:", { fullName, email, address });
};

const getAllUser = async () => {
    const connection = await getConnection();
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`'
        );
        return results
    } catch (err) {
        console.log(err);
        return [];
    }
}

export {
    handleCreateUser,
    getAllUser
}