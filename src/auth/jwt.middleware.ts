import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken'; 
@Injectable()
export class JwtMiddleware implements NestMiddleware {
use(req: Request, res: Response, next: NextFunction) {
const token = req.headers.authorization?.split(' ')[1];
if (token) {
jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
if (err) {
return res.status(401).json({ message: 'Token inválido' });
} else {
req['user'] = decoded;
next();
}
});
} else {
return res.status(401).json({ message: 'Token no proporcionado' });
}
}
}