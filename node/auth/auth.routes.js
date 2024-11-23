import {Router} from 'express';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';

const router = Router();


const authService = new AuthService();
const authController = new AuthController(authService);

router.post('/register', authController.register.bind(authController));

router.post('/login', authController.login.bind(authController));



export default router;