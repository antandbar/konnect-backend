'use strict';

const mongoose = require('mongoose');

// en caso de error en la conexión
mongoose.connection.on('error', (err: any) => {
  console.log('Error de conexión a MongoDB', err);
  process.exit(1);
});

// evento al conectar primea vez la BBDD
mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB en la BD:', mongoose.connection.name);
});

mongoose.connect(process.env.NODE_ENV === 'development'?process.env.URI_LOCAL:process.env.URI, {
  useNewUrlParser: true,
});
