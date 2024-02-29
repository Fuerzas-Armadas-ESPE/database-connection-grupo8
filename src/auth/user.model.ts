// export interface User {
//   username: string;
//   password: string;
// }

import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  tokens: [{ type: String }] // Campo para almacenar los tokens de acceso
});

export default model('User', userSchema);
