import { User } from "../models/User.js";
import { BcryptService } from "../utils/bcrypt/bcrypt.service.js";

export class AuthService {
    constructor() {
        this.User = User;
    }

    async register(name, email, password) {
        try {
            const hashedPassword = BcryptService.hashPassword(password);
            const user = new this.User({
                name,
                email,
                password
            });
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            const user = await this.User.findOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            const isPasswordValid = BcryptService.comparePassword(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Password not match");
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
}