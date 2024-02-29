// src/auth/jwt.strategy.ts

import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './jwt.contrants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // Aquí podrías realizar la validación adicional del token, como comprobar si el usuario aún existe en la base de datos
    // Si la validación es exitosa, retorna el objeto del usuario
    // De lo contrario, lanza una excepción UnauthorizedException
    throw new UnauthorizedException();
  }
}
