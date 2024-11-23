import bcrypt from 'bcrypt';

export class BcryptService {
    static async hashPassword(password) {
        return new Promise(async (resolve, reject) => {
            try {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                resolve(hashedPassword);
            } catch (error) {
                reject(error);
            }
        });
    }

    static async comparePassword(password, hash) {
        return new Promise(async (resolve, reject) => {
            try {
                const isCorrect = await bcrypt.compare(password, hash);
                resolve(isCorrect);
            } catch (error) {
                reject(error);
            }
        });
    }
}
