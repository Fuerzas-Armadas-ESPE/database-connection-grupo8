// auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Verificar las credenciales del usuario
    const isValidCredentials = await this.validateCredentials(
      username,
      password,
    );
    if (!isValidCredentials) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Generar y devolver un token JWT
    const payload = { username };
    const accessToken = this.jwtService.sign(payload);

    return { access_token: accessToken };
  }

  async validateCredentials(
    username: string,
    password: string,
  ): Promise<boolean> {
    // Lógica para verificar las credenciales del usuario
    // Esto puede implicar consultar una base de datos o un servicio externo
    // Devuelve true si las credenciales son válidas, de lo contrario false
    return true; // Replace with your logic to validate the credentials
  }
}
