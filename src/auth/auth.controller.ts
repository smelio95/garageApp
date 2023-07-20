// auth.controller.ts (Backend)
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: any) {
    const user = await this.authService.validateUser(loginData.email, loginData.password);
    if (!user) {
      // Simulation d'une réponse échouée avec la propriété "success" définie sur false
      const response = {
        success: false,
        message: 'Identifiants invalides'
      };

      return response;
    }

    // Simulation d'une réponse réussie avec la propriété "success" définie sur true
    const response = {
      success: true,
      message: 'Authentification réussie'
    };

    return response;
  }
}
