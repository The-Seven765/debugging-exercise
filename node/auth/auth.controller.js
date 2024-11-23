export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }
  /**
   * Creates User
   * @param request {Request}
   * @param response (Response}
   * @param next {NextFunction}
   */
  async register(request, response, next) {
    try {
      const { name, email, password } = request.body;
      const user = await this.authService.register(name, email, password);
      response.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Login User
   * @param request {Request}
   * @param response {Response}
   * @param next {NextFunction}
   */
  async login(request, response, next) {
    try {
      const { email, password } = request.body;
      const user = await this.authService.login(email, password);
      response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
