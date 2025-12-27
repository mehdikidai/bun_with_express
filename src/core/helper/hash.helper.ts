import bcrypt from "bcryptjs";


class Hash {

    static async make(password: string): Promise<string> {

        return await bcrypt.hash(password, 10);

    }

    static async check(password: string, hash: string): Promise<boolean> {

        return await bcrypt.compare(password, hash);        
    
    }

}

export default Hash;