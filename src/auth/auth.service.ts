// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Ici, vous pouvez implémenter la logique de vérification des informations de connexion.
    // Par exemple, vérifier les informations dans une base de données.
    // Si les informations de connexion sont valides, renvoyez les données de l'utilisateur, sinon renvoyez null.
    const user = await this.findUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    // Générez le token JWT à partir des informations de l'utilisateur.
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async findUserByEmail(email: string): Promise<any> {
    // Ici, vous devrez récupérer les informations de l'utilisateur à partir de la base de données ou d'un autre endroit.
    // C'est une méthode fictive qui retourne un objet utilisateur pour démontrer le processus.
    const users = [
      { id: 1, email: 'user@example.com', password: 'password123' },
    ];
    return users.find((user) => user.email === email);
  }
}
