// init-mongo.js

// Cambiar a la base de datos que deseas utilizar
db = db.getSiblingDB('PruebaWeb');

// Crear las colecciones
db.createCollection("users");
db.createCollection("comments");
db.createCollection("posts");