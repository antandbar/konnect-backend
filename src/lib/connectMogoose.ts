'use strict';

import mongoose from 'mongoose';

const dbMongodbConnection = () => {
  // en caso de error en la conexión
  mongoose.connection.on('error', (err: object) => {
    console.log('Error de conexión a MongoDB', err);
    process.exit(1);
  });

  // evento al conectar primea vez la BBDD
  mongoose.connection.once('open', async () => {
    console.log('Conectado a MongoDB en la BD:', mongoose.connection.name);
  });

  // conexión a la BBDD según dev o prod
  mongoose.connect(
    (process.env.NODE_ENV as string) === 'development'
      ? (process.env.URI_LOCAL as string)
      : (process.env.URI as string),
    {
      useNewUrlParser: true,
    } as mongoose.ConnectOptions,
  );
};

export { dbMongodbConnection };
