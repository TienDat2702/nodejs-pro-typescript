import { log } from "console";

const handleCreateUser = (fullName: string, email: string, address: string) => {
    log(">>>> check data from service:", { fullName, email, address });
};

export {
    handleCreateUser
}