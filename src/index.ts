'use strict';

import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createHttpError from 'http-errors';
import path from 'path';
import { dbMongodbConnection } from './lib/connectMogoose';
import { dbPostgresqlConnection } from './lib/connectPostgresql';
import Associations from './models/Associations';


// Routes
import ActivitiesRoutes from './routes/activities';
import CategoryRoutes from './routes/categories';
import CommentRoutes from './routes/comments';
import TrakingRoutes from './routes/trackings';
import LocationRoutes from './routes/locations';
import UserRoutes from './routes/user';
import UserStatusRoutes from './routes/user-status'; 
import countRoutes from './routes/counts'; 
import loginsRoutes from './routes/logins'; 

// Inicializaciones
const app = express();
dbMongodbConnection();
dbPostgresqlConnection();

Associations.relations();

//Configuracionesa
app.set('port', process.env.PORT || 3000);

// Middelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/apiv1/activities', ActivitiesRoutes);
app.use('/apiv1/category', CategoryRoutes);
app.use('/apiv1/tracking', TrakingRoutes);
app.use('/apiv1/location', LocationRoutes);
app.use('/apiv1/user-status', UserStatusRoutes);
app.use('/apiv1/user', UserRoutes);
app.use('/apiv1/count', countRoutes);
app.use('/apiv1/login', loginsRoutes);


// Estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Arrancar el servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createHttpError(404));
});

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // error
  res.status(err.status || 500);

  /* res.json('error'); */
  res.json({ error: err.message });
});
