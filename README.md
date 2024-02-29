# Proyecto de Ejemplo con Nest.js

Este es un proyecto de ejemplo creado con Nest.js que incluye la funcionalidad básica de autenticación de usuarios, publicación de posts y comentarios asociados a dichos posts.

## Instalación

Antes de comenzar, asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu máquina.

```bash
npm install -g @nestjs/cli
git clone https://github.com/tu_usuario/nestjs-example.git
cd nestjs-example
npm install
```

## Iniciar la Aplicación

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run start:dev
```

Esto iniciará el servidor en http://localhost:3000.

## Autenticación

Abre Postman y crea una solicitud POST a http://localhost:3000/auth/login con el siguiente cuerpo en formato JSON:

```bash
{
  "username": "tu_usuario",
  "password": "tu_contraseña"
}
```

Esta solicitud generará un token que necesitarás para autenticar otras solicitudes.

## Obtener y Listar Posts

Crea una solicitud GET a http://localhost:3000/posts para obtener todos los posts. Asegúrate de incluir el token de autenticación en los encabezados.

## Comentarios en Posts

Crea una solicitud POST a http://localhost:3000/posts/2/comments (puedes cambiar el número 2 según el post al que quieras agregar un comentario) con el siguiente cuerpo en formato JSON:

```bash
{
  "author": "Grupo8",
  "content": "Este es mi comentario."
}
```

Esto agregará un comentario al post especificado.

Para ver los comentarios asociados a un post, realiza una solicitud GET a http://localhost:3000/posts/2/comments (nuevamente, ajusta el número según el post deseado).

# Estructura del Proyecto

En el directorio `src`, se ha agregado una nueva carpeta denominada `comments` que incluye los siguientes archivos:

- `comment.model.ts`: Este archivo define la estructura del modelo de comentarios.
- `comments.controller.ts`: Aquí se encuentra el controlador que gestiona las solicitudes relacionadas con los comentarios.
- `comments.module.ts`: Este módulo encapsula la lógica asociada con los comentarios.
- `comments.service.ts`: En este archivo se encuentra el servicio que lleva a cabo las operaciones relacionadas con los comentarios.
- `comments.service.spec.ts`: Contiene pruebas unitarias destinadas a evaluar el servicio de comentarios.

Adicionalmente, se realizaron pequeñas modificaciones en `app.module.ts` para integrar la nueva funcionalidad.

Espero que esta estructura sea clara y que encuentres útil y fácil de entender este proyecto de ejemplo. ¡Disfruta explorando Nest.js!
